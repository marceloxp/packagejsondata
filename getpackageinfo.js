var fs     = require('fs');
var semver = require('semver');

const getPackageInfo = (p_package_folder) =>
{
	const package_json = (p_package_folder) ? p_package_folder + '/package.json' : 'package.json';
	const json         = JSON.parse(fs.readFileSync(package_json));
	const result       = 
	{
		'name'    : json.name,
		'version' : json.version,
		'next'    : semver.inc(json.version, 'patch')
	};
	return result;
};

exports.data = () =>
{
	const result = getPackageInfo();
	return result;
};

exports.name = () =>
{
	const result = getPackageInfo();
	return result.name;
};

exports.version = () =>
{
	const result = getPackageInfo();
	return result.version;
};

exports.next = () =>
{
	const result = getPackageInfo();
	return result.next;
};