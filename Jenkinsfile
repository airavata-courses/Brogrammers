node{
   
    stage("SCM Checkout"){
       
        git branch: 'Dockerized_Post_Analysis', credentialsId: 'git-creds', url: 'https://github.com/airavata-courses/Brogrammers/'
       
       
    }
    stage('Build Docker Image'){
      		
         sh "docker build -t arjunbh/data-retrieval ."
    }
   
    stage('Push Docker Image'){
        
     sh "docker login -u arjunbh -p brogrammers "
     sh "docker push arjunbh/data-retrieval"
     
    }
   
}
