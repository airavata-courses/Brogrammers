pipeline {
    agent any
    stages {
        stage('Installing dependencies') {
            steps {                 
                sh '''
                    sudo apt-get -s upgrade 
                    sudo apt-get install -y default-jdk 
                    sudo apt --assume-yes install maven
                    mvn pre-clean
                    mvn compile
                    mvn package
                    echo "Maven Build Successful"
                '''
             }
        }
        stage('Building Docker image') {
            steps {
               sh '''
                    sudo apt --assume-yes install docker.io
                    sudo systemctl start docker
                    sudo systemctl enable docker 
                    sudo docker build -t arjunbh/gateway-api .
                '''    
                }
        }
        stage('Pushing to Docker hub') {
            steps {
                withCredentials([string(credentialsId: 'secret-pwd', variable: 'dockerHubP')]) {
                sh "sudo docker login -u arjunbh -p brogrammers"  
                }
                sh "sudo docker push arjunbh/gateway-api"
             }
        }
          stage('SSH to Kubernetes master') {
              steps{
                sh '''
                    chmod 400 brogrammers.pem
                    ssh -o StrictHostKeyChecking=no -i brogrammers.pem ubuntu@149.165.170.140  uptime
                    ssh -i brogrammers.pem ubuntu@149.165.170.140  " rm -rf Brogrammers &&
                    git clone https://github.com/airavata-courses/Brogrammers.git &&
                    
                    cd Brogrammers &&
                    git pull &&
                    git checkout Kubernetes &&
                    cd gateway_api && 
                    kubectl delete service gatewayapi &&
                    kubectl delete deployment gatewayapi &&
                    kubectl apply -f config.yaml"
                '''    
             }
        }
    }
}
