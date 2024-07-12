pipeline {
  agent none
  stages {
    stage('Build') {
      agent { label 'NodeJsAgent' }
      tools { nodejs "Node18" }
      steps {
        echo 'Installing dependencies...'
        sh 'npm ci'
      }
    }
    stage('Test on Node v18') {
      agent { label 'NodeJsAgent' }
      tools { nodejs "Node18" }
      steps {
        echo 'Testing...'
        sh 'npx jest'
        recordCoverage name: 'Coverage Report: Blue Button Meta on node.js v18', id: 'bb-meta', qualityGates: [
            [criticality: 'ERROR', integerThreshold: 80, metric: 'LINE', threshold: 80.0]
          ], skipPublishingChecks: true, tools: [
            [parser: 'COBERTURA', pattern: 'coverage/cobertura-coverage-node18.xml']
          ]
      }
    }
    // stage('Test on Node v20') {
    //   agent { label 'NodeJsAgent' }
    //   tools { nodejs "Node20" }
    //   steps {
    //     echo 'Testing...'
    //     sh 'npx jest'
    //     recordCoverage 
    //       name: 'Coverage Report: Blue Button Meta on node.js v20', 
    //       id: 'bb-meta', 
    //       qualityGates: [
    //         [criticality: 'ERROR', integerThreshold: 80, metric: 'LINE', threshold: 80.0]
    //       ], 
    //       skipPublishingChecks: true, 
    //       tools: [
    //         [parser: 'COBERTURA', pattern: 'coverage/cobertura-coverage-node20.xml']
    //       ]
    //   }
    // }
    // stage('Test on Node v22') {
    //   agent { label 'NodeJsAgent' }
    //   tools { nodejs "Node22" }
    //   steps {
    //     echo 'Testing...'
    //     sh 'npx jest'
    //     recordCoverage 
    //       name: 'Coverage Report: Blue Button Meta on node.js v22', 
    //       id: 'bb-meta', 
    //       qualityGates: [
    //         [criticality: 'ERROR', integerThreshold: 80, metric: 'LINE', threshold: 80.0]
    //       ], 
    //       skipPublishingChecks: true, 
    //       tools: [
    //         [parser: 'COBERTURA', pattern: 'coverage/cobertura-coverage-node22.xml']
    //       ]
    //   }
    // }
  }
  post {
    always {
      echo 'Clean Up Work Space'
      deleteDir()
    }
  }
}