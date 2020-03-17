node{
   
    stage("SCM Checkout"){
       
        git branch: 'Dockerized_Model_Execution', credentialsId: 'git-creds', url: 'https://github.com/airavata-courses/Brogrammers/'
       
       
    }
    stage('Build Docker Image'){
      	
        sh "sudo systemctl start docker"
        sh "sudo systemctl enable docker"   	
        sh "sudo docker build -t arjunbh/model-execution:1.0.0 ."
    }
   
    stage('Push Docker Image'){
  withCredentials([string(credentialsId: 'secret-pwd', variable: 'dockerHubPwd')]) {
     sh "sudo docker login -u arjunbh -p ${dockerHubPwd}"
       
       
}


  sh " sudodocker push arjunbh/model-execution:1.0.0"
     
    }
   
}
