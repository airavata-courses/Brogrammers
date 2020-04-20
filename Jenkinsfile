node{
    stage("SCM Checkout"){
        git branch: 'Dockerized_Post_Analysis', credentialsId: 'git-creds', url: 'https://github.com/airavata-courses/Brogrammers/'
    }
    stage('Build dependencies'){
        sh 'pip3 install -r requirements.txt'
    } 
    stage('Running test cases') {          
        sh 'python3 PostAnalysisTest/test.py'
    }
    stage('Build Docker Image'){
        sh "sudo systemctl start docker"
        sh "sudo systemctl enable docker"   	
        sh "sudo docker build -t arjunbh/post-analysis ."
    }
    stage('Push Docker Image'){
        sh '''
            sudo docker login --username=arjunbh --password=brogrammers &&
            sudo apt-get upgrade -y &&
            sudo docker push arjunbh/post-analysis
        '''
    }
    stage('SSH to Kubernetes master') {
            sh '''
                chmod 400 brogrammers.pem
                ssh -o StrictHostKeyChecking=no -i brogrammers.pem ubuntu@149.165.170.140  uptime
                ssh -i brogrammers.pem ubuntu@149.165.170.140 " rm -rf Brogrammers &&
                git clone https://github.com/airavata-courses/Brogrammers.git &&
                cd Brogrammers &&
                git pull &&
                git checkout Kubernetes &&
                cd post_analysis &&
                kubectl delete deployment post-processing &&
                sudo kubectl apply -f config.yaml"
                
            '''    
        }
}
