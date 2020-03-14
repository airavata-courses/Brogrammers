node{
   
    stage("SCM Checkout"){
       
        git branch: 'Dockerized_Post_Analysis', credentialsId: 'git-creds', url: 'https://github.com/airavata-courses/Brogrammers/'
       
       
    }
   
    stage('Build Docker Image'){
       
         sh "docker build -t arjunbh/post-analysis:1.0.0 ."
    }
   
    stage('Push Docker Image'){
        withCredentials([string(credentialsId: 'secret-pwd', variable: 'dockerHubP')]) {
     sh "docker login -u arjunbh -p brogrammers "
       
       
}
  sh "docker push arjunbh/post-analysis:1.0.0"
     
    }
   
}
