node{
    
    stage("SCM Checkout"){
       
        git branch: 'Dockerized-Data-Retrieval', credentialsId: 'git-creds', url: 'https://github.com/airavata-courses/Brogrammers/'
       
       
    }
    stage('Running test cases') {   
        sh "pip install --upgrade pip"
        sh "pip install nexradaws"            
        sh "python3 DataRetrievalTest/DataRetrievalTest.py"
    
    }
    stage('Build Docker Image'){
        sh "sudo systemctl start docker"
        sh "sudo systemctl enable docker"   	
        sh "sudo docker build -t arjunbh/data-retrieval ."
    }
    stage('Push Docker Image'){
        sh '''
            sudo docker login --username=arjunbh --password=brogrammers &&
            sudo apt-get upgrade -y &&
            sudo docker push arjunbh/data-retrieval
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
                cd data_retrieval &&
                kubectl delete service data-retrieval &&
                kubectl delete deployment data-retrieval &&
                sudo kubectl apply -f config.yaml "
            '''    
        }

}
