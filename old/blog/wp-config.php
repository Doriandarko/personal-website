<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wrd_dcb2kj2kgi');

/** MySQL database username */
define('DB_USER', 'wrdMTA9iSAb');

/** MySQL database password */
define('DB_PASSWORD', '7oB7mbnxVI');

/** MySQL hostname */
define('DB_HOST', 'pietroschiranocom.fatcowmysql.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '9uI7U96yetqApekUD3G3WTJVu8a4yhFhQCBfVGE7665FPLLTszlnElaSK4cPBLiU');
define('SECURE_AUTH_KEY',  '0pLPSInmg5RiMK8rMrA5sjDtUKzBMCGp67Vl0uy97SvWReNL8iRx0gFiEW2REwox');
define('LOGGED_IN_KEY',    'twZR8sX3oYcJwTqp4d7qpg2oNnL2SP0jbX0FAkX4rVXiJ6FjgCTe5ys1AaqBdLbV');
define('NONCE_KEY',        'T21hNsrgpxvF7larLIHEVCFJ3cbwYIAfu0ifHxsuKv64WsIIZ7PWNbEca9o26DuP');
define('AUTH_SALT',        'XWE0oALmnV8rj0l4adEvjQTBpgJCo92hUVr9Kjcqszg6LulCPZLnRro0KNPCDFBN');
define('SECURE_AUTH_SALT', 'FJRikEQUHg1H79ojCsvFPOjV5hv5wHQ62Vk53AoOkVzQkQF2gifi8jHjouF8gpKQ');
define('LOGGED_IN_SALT',   'i7b7NPXsRthPzF3mRXCYlsZ8f4xriOzOArpNs8ItBXew5ql19CT9V2hKqOkTri9M');
define('NONCE_SALT',       'TJw0XG1kbeMDzOTUBIoakAANc5mo9IquvbACUmWlWlQQwrgwQradovzAqxv2sEZe');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
