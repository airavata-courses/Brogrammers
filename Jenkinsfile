node{
   
    stage("SCM Checkout"){
       
        git branch: 'Dockerized-Front-End', credentialsId: 'git-creds', url: 'https://github.com/airavata-courses/Brogrammers/'
       
       
    }
    stage('Build Docker Image'){
       	cd "/Dockerized-Front-End/Front_End"	
         sh "docker build -t arjunbh/front-end:1.0.0 ."
    }
   
    stage('Push Docker Image'){
        withCredentials([string(credentialsId: 'secret-pwd', variable: 'dockerHubP')]) {
     sh "docker login -u arjunbh -p brogrammers "
       
       
}
  sh "docker push arjunbh/front-end:1.0.0"
     
    }
   
}
