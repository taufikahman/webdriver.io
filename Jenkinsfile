pipeline {
    agent any

    environment {
        NODE_HOME = tool 'nodejs' 
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }

    tools {
        allure 'Allure'  // Make sure Allure is installed in Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                // Clone repository dari GitLab
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Verifikasi versi Node.js dan npm
                    sh 'node --version'
                    sh 'npm --version'
                }
                // Install dependensi
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Jalankan pengujian WebdriverIO
                sh 'npm run wdio:server'
            }
        }
    }

    post {
        always {
            // Publish Allure Report even if tests fail
            allure includeProperties: false, jdk: '', results: [[path: 'allure-results/homecare']]

            // Archive hasil tes jika diperlukan
            archiveArtifacts artifacts: 'allure-results/homecare/**', allowEmptyArchive: true

            // Tampilkan hasil log
            script {
                echo 'Test execution completed. Check logs for details.'
            }
        }
        failure {
            script {
                echo 'Pipeline failed. Please check the logs for details.'
            }
        }
    }
}