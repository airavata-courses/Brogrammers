pipeline {
    agent any
    stages {
        stage('Installing dependencies') {
            steps {                 
                sh '''
                    apt --assume-yes install maven
                    mvn pre-clean
                    mvn compile
                    mvn package
                '''
             }
        }
        stage('Building Docker image') {
            steps {
               sh '''
                    apt --assume-yes install docker.io
                    systemctl start docker
                    systemctl enable docker 
                    docker build -t arjunbh/gateway-api .
                '''    
                }
        }
        stage('Pushing to Docker hub') {
            steps {
                withCredentials([string(credentialsId: 'secret-pwd', variable: 'dockerHubP')]) {
                sh "docker login -u arjunbh -p brogrammers"  
                }
                sh "docker push arjunbh/gateway-api"
             }
        }
          stage('SSH to Kubernetes master') {
              steps{
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
    }
}
