const { sql } = require('./database/connection/db');

sql`
ALTER TABLE users
ADD COLUMN status BOOLEAN DEFAULT TRUE,
ADD COLUMN otp_expires_at TIMESTAMP;


`.then(() => {
    console.log("Table created!");
}).catch(err => {
    console.error("Error creating table:", err);
});