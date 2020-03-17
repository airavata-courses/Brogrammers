node{
        stage("SCM Checkout"){
            git branch: 'Dockerized-Gateway-API', credentialsId: 'git-creds', url: 'https://github.com/airavata-courses/Brogrammers/'
        }
        stage('Mvn Package'){
            sh '''
                sudo apt --assume-yes install maven
                mvn pre-clean
                mvn compile
                mvn package
            '''
        }
        stage('Installing Docker and building image') {
            sh '''
                cd "Dockerized-Gateway-API"
                sudo apt --assume-yes install docker.io
                sudo systemctl start docker
                sudo systemctl enable docker 
                sudo docker build -t arjunbh/gateway-api .
            '''    
        }
        stage('Push Docker Image'){
            withCredentials([string(credentialsId: 'secret-pwd', variable: 'dockerHubP')]) {
            sh "sudo docker login -u arjunbh -p brogrammers"  
            }
            sh "sudo docker push arjunbh/gateway-api"
        }
        stage('SSH to Kubernetes master') {
            sh '''
                cd "/Dockerized-Gateway-API" 
                chmod 400 brogrammers.pem
                ssh -o StrictHostKeyChecking=no -i brogrammers.pem ubuntu@149.165.170.140  uptime
                ssh -i brogrammers.pem ubuntu@149.165.170.140  " rm -rf Brogrammers &&
                git clone https://github.com/airavata-courses/Brogrammers.git &&
                cd Brogrammers &&
                git pull &&
                git checkout Kubernetes &&
                cd gateway_api && 
                export KUBECONFIG=/etc/kubernetes/admin.conf
                kubectl delete service &&
                kubectl delete deployment gateway-api &&
                kubectl apply -f config.yaml"
            '''    
        }
}
