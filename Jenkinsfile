pipeline {
    agent any
    stages {
        stage('Mvn Package'){
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
        stage('Build Docker Image'){
            steps {
               sh '''
                    sudo apt --assume-yes install docker.io
                    sudo systemctl start docker
                    sudo systemctl enable docker 
                    sudo docker build -t arjunbh/user-manangement:1.0.0 .
                '''    
            }
        }

        stage('Push Docker Image'){
            steps{
                withCredentials([string(credentialsId: 'secret-pwd', variable: 'dockerHubP')]) {
                    sh "sudo docker login -u arjunbh -p brogrammers"  
                    }
                    sh "sudo docker push arjunbh/user-manangement"
            
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
                    cd user-manangement && 
                    
                    kubectl delete service usermanagement &&
                    kubectl delete deployment usermanangement &&
                    kubectl apply -f config.yaml"
                '''   
            } 
        }
    }
}
