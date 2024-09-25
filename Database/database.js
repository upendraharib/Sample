import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'mydatabase.db',
    location: 'default',
  },
  () => {
    console.log('Database opened successfully');
  },
  error => {
    console.error('Error opening database:', error);
  }
);

// Function to create a table
export const createUserTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        mobile TEXT
      );`,
      [],
      () => {
        console.log('Table created successfully');
      },
      error => {
        console.error('Error creating table:', error);
      }
    );
  });
};

// Function to insert a single user
export const insertUser = (username, mobile) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO users (username, mobile) VALUES (?, ?);`,
      [username, mobile],
      () => {
        console.log('User inserted successfully');
      },
      error => {
        console.error('Error inserting user:', error);
      }
    );
  });
};

// Function to insert multiple users in bulk
export const insertUsersInBulk = (users) => {
  db.transaction(tx => {
    users.forEach(user => {
      tx.executeSql(
        `INSERT INTO users (username, mobile) VALUES (?, ?);`,
        [user.username, user.mobile],
        () => {
          console.log(`User ${user.username} inserted successfully`);
        },
        error => {
          console.error('Error inserting user:', error);
        }
      );
    });
  });
};

// Function to fetch users
export const fetchUsers = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM users;`,
      [],
      (tx, results) => {
        let users = [];
        for (let i = 0; i < results.rows.length; i++) {
          users.push(results.rows.item(i));
        }
        callback(users);
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
  });
};

// Export the database instance and the methods
export default db;