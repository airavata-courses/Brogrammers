node{
   
    stage("SCM Checkout"){
       
        git branch: 'Dockerized_Model_Execution', credentialsId: 'git-creds', url: 'https://github.com/airavata-courses/Brogrammers/'
       
       
    }
    stage('Build Docker Image'){
      	
        sh "sudo systemctl start docker"
        sh "sudo systemctl enable docker"   	
        sh "sudo docker build -t arjunbh/model-execution ."
    }
   
    stage('Push Docker Image'){
        sh '''
            sudo docker login --username=arjunbh --password=brogrammers &&
            sudo apt-get update && 
            sudo apt-get upgrade -y &&
            sudo docker push arjunbh/model-execution
        '''
    }
   
}
