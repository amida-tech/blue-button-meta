pipeline {
  agent { label 'NodeJsAgent'}
  stages {
    stage('Sanity Check') {
      steps {
        echo 'Node installation check...'
        sh 'node --version'
      }
    }
    stage('Build') {
      steps {
        echo 'Installing dependencies...'
        sh 'npm i'
      }
    }
    stage('Test') {
      steps {
        echo 'Testing...'
        sh 'npm test'
      }
    }
  }
}