var fs     = require('fs');
var semver = require('semver');

const getPackageInfo = (p_package_folder) =>
{
	const package_json = (p_package_folder) ? p_package_folder.concat('/package.json') : 'package.json';
	const json         = JSON.parse(fs.readFileSync(package_json));
	const result       = 
	{
		'name'    : json.name,
		'version' : json.version,
		'next'    : semver.inc(json.version, 'patch')
	};
	return result;
};

exports.data = (p_package_folder) =>
{
	const result = getPackageInfo(p_package_folder);
	return result;
};

exports.name = (p_package_folder) =>
{
	const result = getPackageInfo(p_package_folder);
	return result.name;
};

exports.version = (p_package_folder) =>
{
	const result = getPackageInfo(p_package_folder);
	return result.version;
};

exports.next = (p_package_folder) =>
{
	const result = getPackageInfo(p_package_folder);
	return result.next;
};