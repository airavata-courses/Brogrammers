node{
    stage("SCM Checkout"){
        git branch: 'Dockerized-Session-Management', credentialsId: 'git-creds', url: 'https://github.com/airavata-courses/Brogrammers/'
    }
     stage('Installing docker and building image') {
            sh '''
                sudo apt --assume-yes install docker.io
                sudo systemctl start docker
                sudo systemctl enable docker 
                sudo docker build -t arjunbh/session-management .
            '''    
     } 
    stage('Push Docker Image'){
        sh '''
            sudo docker login --username=arjunbh --password=brogrammers &&
            sudo apt-get upgrade -y &&
            sudo docker push arjunbh/session-management
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
                cd session_management &&
                sudo kubectl apply -f config.yaml"
            '''    
        }
}
