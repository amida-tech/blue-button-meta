pipeline {
  agent none
  stages {
    stage('Build') {
      agent { label NodeJsAgent }
      tools { nodejs "Node18" }
      steps {
        echo 'Installing dependencies...'
        sh 'npm i'
      }
    }
    stage('Test on Node v18') {
      agent { label NodeJsAgent }
      tools { nodejs "Node18" }
      steps {
        echo 'Testing...'
        sh 'npm test'
      }
    }
    stage('Test on Node v20') {
      agent { label NodeJsAgent }
      tools { nodejs "Node20" }
      steps {
        echo 'Testing...'
        sh 'npm test'
      }
    }
    stage('Test on Node v22') {
      agent { label NodeJsAgent }
      tools { nodejs "Node22" }
      steps {
        echo 'Testing...'
        sh 'npm test'
      }
    }
  }
}