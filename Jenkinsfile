node{
   
    stage("SCM Checkout"){
       
        git branch: 'Dockerized_Model_Execution', credentialsId: 'git-creds', url: 'https://github.com/airavata-courses/Brogrammers/'
       
       
    }
    stage('Build Docker Image'){
      	sh "sudo apt --assume-yes install docker.io"
        sh "sudo systemctl start docker"
        sh "sudo systemctl enable docker"   	
        sh "docker build -t arjunbh/model-execution:1.0.0 ."
    }
   
    stage('Push Docker Image'){
        withCredentials([string(credentialsId: 'secret-pwd', variable: 'dockerHubP')]) {
     sh "docker login -u arjunbh -p brogrammers "
       
       
}
  sh "docker push arjunbh/model-execution:1.0.0"
     
    }
   
}
