node{
   
    stage("SCM Checkout"){
        git branch: 'dockerized-rabbitmq', credentialsId: 'git-creds', url: 'https://github.com/airavata-courses/Brogrammers/'
       
    }
    stage('Build Docker Image'){
        sh "sudo systemctl start docker"
        sh "sudo systemctl enable docker"   	
        sh "sudo docker build -t arjunbh/rabbitmq-service ."
    }
   
    stage('Push Docker Image'){
        sh '''
            sudo docker login --username=arjunbh --password=brogrammers &&
            sudo apt-get upgrade -y &&
            sudo docker push arjunbh/rabbitmq-service
        '''
    }
    stage('SSH to Kubernetes master') {
        sh '''
            chmod 400 brogrammers.pem
            ssh -o StrictHostKeyChecking=no -i brogrammers.pem ubuntu@149.165.170.140  uptime
            ssh -i brogrammers.pem ubuntu@149.165.170.140  " rm -rf Brogrammers &&
            git clone https://github.com/airavata-courses/Brogrammers.git &&
            cd Brogrammers &&
            git pull &&
            git checkout Kubernetes &&
            cd rabbitmq_service &&
            sudo kubectl apply -f config.yaml"
        '''    
        }
   
}