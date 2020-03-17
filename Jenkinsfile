pipeline {
    agent any
    stages {
        stage("SCM Checkout"){
        
            git branch: 'Dockerized-User-Management', credentialsId: 'git-creds', url: 'https://github.com/airavata-courses/Brogrammers/'
        
        }
        stage('Mvn Package'){
        
            def mvnHome= tool name: 'maven-3', type: 'maven'
            def mvnCMD = "${mvnHome}/bin/mvn"
            sh "${mvnCMD} clean package"
        }
        stage('Build Docker Image'){
        sh "docker build -t arjunbh/user-manangement:1.0.0 ."
        }
    
        stage('Push Docker Image'){
            withCredentials([string(credentialsId: 'secret-pwd', variable: 'dockerHubP')]) {
            sh "docker login -u arjunbh -p brogrammers "
        }
        sh "docker push arjunbh/user-manangement:1.0.0"
        
        }

        stage('SSH to Kubernetes master') {
            
            sh '''
                cd "/Dockerized-User-Management" 
                chmod 400 brogrammers.pem
                ssh -o StrictHostKeyChecking=no -i brogrammers.pem ubuntu@149.165.170.140  uptime
                ssh -i brogrammers.pem ubuntu@149.165.170.140  " rm -rf Brogrammers &&
                git clone https://github.com/airavata-courses/Brogrammers.git &&
                cd Brogrammers &&
                git pull &&
                git checkout Kubernetes &&
                cd user-manangement && 
                export KUBECONFIG=/etc/kubernetes/admin.conf
                kubectl delete service &&
                kubectl delete deployment user-manangement:1.0.0 &&
                kubectl apply -f config.yaml"
            '''    
        }
    }
}
