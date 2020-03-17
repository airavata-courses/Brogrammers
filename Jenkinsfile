node{
    stage("SCM Checkout"){
        git branch: 'Dockerized-Session-Management', credentialsId: 'git-creds', url: 'https://github.com/airavata-courses/Brogrammers/'
    }
     stage('Installing docker and building image') {
            sh '''
                cd "Dockerized-Session-Management"
                sudo apt --assume-yes install docker.io
                sudo systemctl start docker
                sudo systemctl enable docker 
                sudo docker build -t arjunbh/session-management .
            '''    
     } 
    stage('Push Docker Image'){
        withCredentials([string(credentialsId: 'secret-pwd', variable: 'dockerHubP')]) {
        sh "sudo docker login -u arjunbh -p brogrammers "        
        }
        sh "sudo docker push arjunbh/session-management" 
    }
     stage('SSH to Kubernetes master') {
            sh '''
                cd "/Dockerized-Session-Management" 
                chmod 400 brogrammers.pem
                ssh -o StrictHostKeyChecking=no -i brogrammers.pem ubuntu@149.165.170.140  uptime
                ssh -i brogrammers.pem ubuntu@149.165.170.140  " rm -rf Brogrammers &&
                git clone https://github.com/airavata-courses/Brogrammers.git &&
                cd Brogrammers &&
                git pull &&
                git checkout Kubernetes &&
                cd session_management && 
                export KUBECONFIG=/etc/kubernetes/admin.conf
                kubectl delete service &&
                kubectl delete deployment session-management &&
                kubectl apply -f config.yaml"
            '''    
        }
}
