# Using CSV Data

## Directory structure:

|- data/
. |- `*.csv`
. |- `csvFileCleaner.js`
. |- csvFilesClean/

## Clean CSV files

Dump CSV files into the `data/` directory.

Run the following command to CLEAN the files:
`sh $ npm run csv:clean-all `

## Send CLEAN files to TMP folder

> MacOS has a folder at `cd ~/../../tmp`, OPEN with `open /tmp`.

Running a local Postgres Database, it can access files in the `/tmp` folder.

1. `$ cp <rootDir>/csv_data/csvFilesClean/tableName.csv /tmp/tableName.csv`
2. `psql=# <PASTE following>`

```sql
ALTER TABLE tableName DISABLE TRIGGER ALL;
Truncate tableName CASCADE;
ALTER TABLE tableName ENABLE TRIGGER ALL;
\copy tableName FROM '/private/tmp/tableName.csv' DELIMITER '|' CSV HEADER;
```