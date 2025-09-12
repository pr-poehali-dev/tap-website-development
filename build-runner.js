#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting build process...');
console.log('Current directory:', process.cwd());
console.log('Node version:', process.version);

// Check if bun is available
const bunProcess = spawn('bun', ['--version'], { stdio: 'pipe' });

bunProcess.on('error', (error) => {
    console.error('❌ Bun not found:', error.message);
    console.log('Attempting to use npm instead...');
    runBuildWithNpm();
});

bunProcess.on('close', (code) => {
    if (code === 0) {
        console.log('✅ Bun is available');
        runBuildWithBun();
    } else {
        console.log('❌ Bun check failed, using npm...');
        runBuildWithNpm();
    }
});

function runBuildWithBun() {
    console.log('🔨 Running: bun run build');
    
    const buildProcess = spawn('bun', ['run', 'build'], { 
        stdio: 'pipe',
        cwd: process.cwd()
    });

    let stdout = '';
    let stderr = '';

    buildProcess.stdout.on('data', (data) => {
        const output = data.toString();
        stdout += output;
        console.log(output);
    });

    buildProcess.stderr.on('data', (data) => {
        const output = data.toString();
        stderr += output;
        console.error(output);
    });

    buildProcess.on('close', (code) => {
        console.log(`\n📊 Build process completed with exit code: ${code}`);
        
        if (code === 0) {
            console.log('✅ BUILD SUCCESSFUL!');
            
            // Check if dist folder was created
            if (fs.existsSync('dist')) {
                console.log('📁 dist/ folder created successfully');
                try {
                    const distContents = fs.readdirSync('dist');
                    console.log('📋 dist/ contents:', distContents);
                } catch (err) {
                    console.log('❌ Error reading dist folder:', err.message);
                }
            } else {
                console.log('⚠️  Warning: dist/ folder not found');
            }
        } else {
            console.log('❌ BUILD FAILED!');
        }

        // Save output to file for analysis
        fs.writeFileSync('build-output.log', `
=== BUILD OUTPUT ===
Exit Code: ${code}
Timestamp: ${new Date().toISOString()}

=== STDOUT ===
${stdout}

=== STDERR ===
${stderr}
`);
        
        console.log('📝 Full output saved to build-output.log');
    });
}

function runBuildWithNpm() {
    console.log('🔨 Running: npm run build');
    
    const buildProcess = spawn('npm', ['run', 'build'], { 
        stdio: 'pipe',
        cwd: process.cwd()
    });

    let stdout = '';
    let stderr = '';

    buildProcess.stdout.on('data', (data) => {
        const output = data.toString();
        stdout += output;
        console.log(output);
    });

    buildProcess.stderr.on('data', (data) => {
        const output = data.toString();
        stderr += output;
        console.error(output);
    });

    buildProcess.on('close', (code) => {
        console.log(`\n📊 Build process completed with exit code: ${code}`);
        
        if (code === 0) {
            console.log('✅ BUILD SUCCESSFUL!');
        } else {
            console.log('❌ BUILD FAILED!');
        }

        // Save output to file
        fs.writeFileSync('build-output.log', `
=== BUILD OUTPUT (npm) ===
Exit Code: ${code}
Timestamp: ${new Date().toISOString()}

=== STDOUT ===
${stdout}

=== STDERR ===
${stderr}
`);
    });
}