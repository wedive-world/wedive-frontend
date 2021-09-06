module.exports = {
	apps: [{
		name: 'app',
		script: 'backend/bin/www',
		instances: 0,
		exec_mode: 'cluster'
	}]
}
