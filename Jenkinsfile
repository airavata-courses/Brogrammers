node{
   
    stage("SCM Checkout"){
       
        git branch: 'dockerized-rabbitmq', credentialsId: 'git-creds', url: 'https://github.com/airavata-courses/Brogrammers/'
       
       
    }
    stage('Build Docker Image'){
      		
         sh "docker build -t arjunbh/rabbitmq ."
    }
   
    stage('Push Docker Image'){
        withCredentials([string(credentialsId: 'secret-pwd', variable: 'dockerHubP')]) {
     sh "docker login -u arjunbh -p brogrammers "
       
       
}
  sh "docker push arjunbh/rabbitmq"
     
    }
   
}
