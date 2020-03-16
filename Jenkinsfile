node{
        stage("SCM Checkout"){
            git branch: 'Dockerized-Gateway-API', credentialsId: 'git-creds', url: 'https://github.com/airavata-courses/Brogrammers/'
        }
        stage('Mvn Package'){
            def mvnHome= tool name: 'maven-3', type: 'maven'
            def mvnCMD = "${mvnHome}/bin/mvn"
            sh "${mvnCMD} clean package"
        }
        stage('Build Docker Image'){
            sh "docker build -t arjunbh/gateway-api:1.0.0 ."
        }
    
        stage('Push Docker Image'){
            withCredentials([string(credentialsId: 'secret-pwd', variable: 'dockerHubP')]) {
            sh "docker login -u arjunbh -p brogrammers "  
            }
            sh "docker push arjunbh/gateway-api:1.0.0"
        }

        stage('SSH to Kubernetes master') {
            steps {
            sh '''
                cd "/Dockerized-Gateway-API" 
                chmod 400 brogrammers.pem
                ssh -o StrictHostKeyChecking=no -i brogrammers.pem ubuntu@149.165.170.140  uptime
                ssh -i brogrammers.pem ubuntu@149.165.170.140  " rm -rf Brogrammers &&
                git clone https://github.com/airavata-courses/Brogrammers.git &&
                cd Brogrammers &&
                git pull &&
                git checkout Kubernetes &&
                cd yaml/Gateway && 
                export KUBECONFIG=/etc/kubernetes/admin.conf
                kubectl delete service &&
                kubectl delete deployment gateway-api &&
                kubectl apply -f config.yaml"
            '''    
            }
        }
   
}
