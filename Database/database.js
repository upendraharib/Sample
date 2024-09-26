import SQLite from 'react-native-sqlite-storage';
SQLite.DEBUG(true);
SQLite.enablePromise(true);
const DatabaseSetup = () => {
  useEffect(() => {
    // Open the database
    const openDB = async () => {
      try {
        const db = await SQLite.openDatabase({ name: 'troopgrit.db', location: 'default' });

        console.log('Database opened successfully');

        // Create multiple tables
        await db.transaction((txn) => {
          txn.executeSql(
            `CREATE TABLE IF NOT EXISTS user (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              user_id INTEGER,
              workspace_id TEXT NOT NULL,
              name TEXT NOT NULL,
              email TEXT NOT NULL,
              mobile TEXT NOT NULL,
              user_avatar TEXT NOT NULL,
              designation_id INTEGER,
              designation_name TEXT NOT NULL,
              company TEXT NOT NULL,
              company_city TEXT NOT NULL,
              user_pin INTEGER,
              is_self_profile INTEGER,
              user_status INTEGER,
              user_role INTEGER,
              is_favourite INTEGER,
              is_muted INTEGER,
              is_orange_member INTEGER,
              user_label TEXT NOT NULL,
              unread_messages_count INTEGER,
              counts TEXT NOT NULL,
              read_receipt_count INTEGER,
              respond_later_count INTEGER,
              last_message TEXT NOT NULL,
              public_key TEXT NOT NULL,
              is_global_user INTEGER,
              unit_id INTEGER,
              data TEXT NOT NULL,
              username TEXT NOT NULL,
              uid TEXT NOT NULL,
              is_archived INTEGER,
              is_blocked INTEGER,
              blocked_me INTEGER,
              country_code TEXT NOT NULL,
              about TEXT NOT NULL,
              pin INTEGER,
              last_message_local_id INTEGER,
              last_message_id INTEGER,
              last_message_type INTEGER,
              last_message_status INTEGER,
              last_message_by_me INTEGER,
              last_message_sender_id INTEGER,
              last_message_time TEXT NOT NULL,
              last_message_sender_name TEXT NOT NULL,
              created_at TEXT NOT NULL,
              updated_at TEXT_NOT_NULL
            );`,
            [],
            (txn, result) => {
              console.log('User table created successfully.');
            },
            (txn, error) => {
              console.log('Error creating User table: ', error);
            }
          );

          txn.executeSql(
            `CREATE TABLE IF NOT EXISTS contacts (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL,
              email TEXT NOT NULL,
              mobile TEXT NOT NULL,
              user_photo TEXT NOT NULL,
              created_at TEXT NOT NULL,
              updated_at TEXT NOT NULL
            );`,
            [],
            (txn, result) => {
              console.log('Orders table created successfully.');
            },
            (txn, error) => {
              console.log('Error creating Orders table: ', error);
            }
          );

          txn.executeSql(
            `CREATE TABLE IF NOT EXISTS group (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              workspace_id TEXT NOT NULL,
              group_id INTEGER,
              group_name TEXT NOT NULL,
              group_avatar TEXT NOT NULL,
              created_by INTEGER,
              group_description TEXT NOT NULL,
              is_orange_group INTEGER,
              is_active INTEGER,
              is_favourite INTEGER,
              is_muted INTEGER,
              unread_message_count INTEGER,
              counts TEXT NOT NULL,
              read_receipt_count INTEGER,
              respond_later_count INTEGER,
              public_key TEXT NOT NULL,
              private_key TEXT NOT NULL,
              group_type INTEGER,
              created_by_tm_appointment_id INTEGER,
              group_status INTEGER,
              topic_data TEXT NOT NULL,
              is_archived INTEGER,
              pin INTEGER,
              conversation_reference_id TEXT NOT NULL,
              last_message TEXT NOT NULL,
              last_message_local_id INTEGER,
              last_message_id INTEGER,
              last_message_type INTEGER,
              last_message_status INTEGER,
              last_message_by_me INTEGER,
              last_message_sender_id INTEGER,
              last_message_time TEXT NOT NULL,
              last_message_sender_name TEXT NOT NULL,
              created_at TEXT NOT NULL,
              updated_at TEXT_NOT_NULL
            );`,
            [],
            (txn, result) => {
              console.log('Group table created successfully.');
            },
            (txn, error) => {
              console.log('Error creating Group table: ', error);
            }
          );
          txn.executeSql(
            `CREATE TABLE IF NOT EXISTS group_members (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              workspace_id TEXT NOT NULL,
              group_id INTEGER,
              user_id INTEGER,
              user_status INTEGER,
              user_role INTEGER,
              member_color TEXT NOT NULL,
              topic_user_role TEXT NOT NULL,
              created_at TEXT NOT NULL,
              updated_at TEXT_NOT_NULL
            );`,
            [],
            (txn, result) => {
              console.log('group_members table created successfully.');
            },
            (txn, error) => {
              console.log('Error creating group_members table: ', error);
            }
          );
          txn.executeSql(
            `CREATE TABLE IF NOT EXISTS message (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              workspace_id TEXT NOT NULL,
              message_id INTEGER,
              sender_id INTEGER,
              receiver_id INTEGER,
              message TEXT NOT NULL,
              attachment TEXT NOT NULL,
              is_group INTEGER,
              is_reply INTEGER,
              original_message_id INTEGER,
              is_sync INTEGER,
              is_delivered INTEGER,
              is_read INTEGER,
              message_type INTEGER,
              is_downloaded INTEGER,
              file_path TEXT NOT NULL,
              caption TEXT NOT NULL,
              original_message TEXT NOT NULL,
              status INTEGER,
              message_hash TEXT NOT NULL,
              is_forward INTEGER,
              is_forkout INTEGER,
              read_receipt_users TEXT NOT NULL,
              is_read_receipt INTEGER,
              read_receipt_status INTEGER,
              is_flag INTEGER,
              is_respond_later INTEGER,
              is_edited INTEGER,
              edited_at TEXT NOT NULL,
              is_in_progress INTEGER,
              message_memory TEXT NOT NULL,
              is_trumpet INTEGER,
              sender_user_id INTEGER,
              receiver_user_id INTEGER,
              is_recommended INTEGER,
              sender_name TEXT NOT NULL,
              reply_message_id INTEGER,
              reply_message_status INTEGER,
              reply_sender_id INTEGER,
              reply_receiver_id INTEGER,
              reply_message_type INTEGER,
              reply_message TEXT NOT NULL,
              reply_attachment TEXT NOT NULL,
              reply_caption TEXT NOT NULL,
              reply_created_at TEXT NOT NULL,
              reply_sender_name TEXT NOT NULL,
              is_like INTEGER,
              pin INTEGER,
              pinned_by INTEGER,
              pinned_at TEXT NOT NULL,
              sender_uid TEXT NOT NULL,
              receiver_uid TEXT NOT NULL,
              is_recommended INTEGER,
              is_room INTEGER,
              created_at TEXT NOT NULL,
              updated_at TEXT_NOT_NULL
            );`,
            [],
            (txn, result) => {
              console.log('message table created successfully.');
            },
            (txn, error) => {
              console.log('Error creating message table: ', error);
            }
          );
          txn.executeSql(
            `CREATE TABLE IF NOT EXISTS settings (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              settings_type INTEGER,
              status INTEGER,
              type TEXT NOT NULL,
              value TEXT NOT NULL,
              attached_file TEXT NOT NULL,
              created_at TEXT NOT NULL,
              updated_at TEXT_NOT_NULL
            );`,
            [],
            (txn, result) => {
              console.log('settings table created successfully.');
            },
            (txn, error) => {
              console.log('Error creating settings table: ', error);
            }
          );
          txn.executeSql(
            `CREATE TABLE IF NOT EXISTS permission (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              workspace_id TEXT NOT NULL,
              user_id TEXT NOT NULL,
              type INTEGER,
              permission TEXT NOT NULL,
              created_at TEXT NOT NULL,
              updated_at TEXT_NOT_NULL
            );`,
            [],
            (txn, result) => {
              console.log('permission table created successfully.');
            },
            (txn, error) => {
              console.log('Error creating permission table: ', error);
            }
          );
          txn.executeSql(
            `CREATE TABLE IF NOT EXISTS plan (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              workspace_id TEXT NOT NULL,
              plan_type INTEGER,
              plan TEXT NOT NULL,
              valid_from TEXT NOT NULL,
              valid_to TEXT NOT NULL,
              created_at TEXT NOT NULL,
              updated_at TEXT_NOT_NULL
            );`,
            [],
            (txn, result) => {
              console.log('plan table created successfully.');
            },
            (txn, error) => {
              console.log('Error creating plan table: ', error);
            }
          );
          txn.executeSql(
            `CREATE TABLE IF NOT EXISTS filedeck_meta (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              message_id INTEGER,
              workspace_id TEXT NOT NULL,
              user_id INTEGER,
              comments TEXT NOT NULL,
              tags TEXT NOT NULL,
              filename TEXT NOT NULL,
              comment_id TEXT NOT NULL,
              created_at TEXT NOT NULL,
              updated_at TEXT_NOT_NULL
            );`,
            [],
            (txn, result) => {
              console.log('filedeck_meta table created successfully.');
            },
            (txn, error) => {
              console.log('Error creating filedeck_meta table: ', error);
            }
          );
          txn.executeSql(
            `CREATE TABLE IF NOT EXISTS mydeck_folder (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              folder_id INTEGER,
              workspace_id TEXT NOT NULL,
              folder_name TEXT NOT NULL,
              folder_type INTEGER,
              is_downloaded INTEGER,
              file_path TEXT NOT NULL,
              status INTEGER,
              reference_id TEXT NOT NULL,
              is_sync INTEGER,
              folder_paths TEXT NOT NULL,
              created_at TEXT NOT NULL,
              updated_at TEXT_NOT_NULL
            );`,
            [],
            (txn, result) => {
              console.log('mydeck_folder table created successfully.');
            },
            (txn, error) => {
              console.log('Error creating mydeck_folder table: ', error);
            }
          );
          txn.executeSql(
            `CREATE TABLE IF NOT EXISTS mydeck_folder_paths (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              workspace_id TEXT NOT NULL,
              ancestor INTEGER,
              descendant INTEGER,
              depth INTEGER,
              created_at TEXT NOT NULL,
              updated_at TEXT_NOT_NULL
            );`,
            [],
            (txn, result) => {
              console.log('mydeck_folder_paths table created successfully.');
            },
            (txn, error) => {
              console.log('Error creating mydeck_folder_paths table: ', error);
            }
          );
          txn.executeSql(
            `CREATE TABLE IF NOT EXISTS mydeck_folder_comments (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              comment_id INTEGER,
              workspace_id TEXT NOT NULL,
              user_id INTEGER,
              folder_id INTEGER,
              comment TEXT NOT NULL,
              created_at TEXT NOT NULL,
              updated_at TEXT_NOT_NULL
            );`,
            [],
            (txn, result) => {
              console.log('mydeck_folder_comments table created successfully.');
            },
            (txn, error) => {
              console.log('Error creating mydeck_folder_comments table: ', error);
            }
          );
          txn.executeSql(
            `CREATE TABLE IF NOT EXISTS mydeck_folder_tags (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              folder_id INTEGER,
              workspace_id TEXT NOT NULL,
              tags TEXT NOT NULL,
              created_at TEXT NOT NULL,
              updated_at TEXT_NOT_NULL
            );`,
            [],
            (txn, result) => {
              console.log('mydeck_folder_tags table created successfully.');
            },
            (txn, error) => {
              console.log('Error creating mydeck_folder_tags table: ', error);
            }
          );
          txn.executeSql(
            `CREATE TABLE IF NOT EXISTS mydeck_files (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              file_id INTEGER,
              workspace_id TEXT NOT NULL,
              folder_id INTEGER,
              filename TEXT NOT NULL,
              file_path TEXT NOT NULL,
              file_extension TEXT NOT NULL,
              file_size TEXT NOT NULL,
              status INTEGER,
              is_downloaded INTEGER,
              is_sync INTEGER,
              reference_id TEXT NOT NULL,
              relative_path TEXT NOT NULL,
              created_at TEXT NOT NULL,
              updated_at TEXT_NOT_NULL
            );`,
            [],
            (txn, result) => {
              console.log('mydeck_files table created successfully.');
            },
            (txn, error) => {
              console.log('Error creating mydeck_files table: ', error);
            }
          );
          txn.executeSql(
            `CREATE TABLE IF NOT EXISTS mydeck_file_comments (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              comment_id INTEGER,
              workspace_id TEXT NOT NULL,
              user_id INTEGER,
              file_id INTEGER,
              comment TEXT NOT NULL,
              created_at TEXT NOT NULL,
              updated_at TEXT_NOT_NULL
            );`,
            [],
            (txn, result) => {
              console.log('mydeck_file_comments table created successfully.');
            },
            (txn, error) => {
              console.log('Error creating mydeck_file_comments table: ', error);
            }
          );
          txn.executeSql(
            `CREATE TABLE IF NOT EXISTS mydeck_file_tags (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              file_id INTEGER,
              workspace_id TEXT NOT NULL,
              tags TEXT NOT NULL,
              created_at TEXT NOT NULL,
              updated_at TEXT_NOT_NULL
            );`,
            [],
            (txn, result) => {
              console.log('mydeck_file_tags table created successfully.');
            },
            (txn, error) => {
              console.log('Error creating mydeck_file_tags table: ', error);
            }
          );
          txn.executeSql(
            `CREATE TABLE IF NOT EXISTS user_appointment (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              tm_appointment_id INTEGER,
              workspace_id TEXT NOT NULL,
              appointment_id INTEGER,
              appointment_name TEXT NOT NULL,
              user_id INTEGER,
              data TEXT NOT NULL,
              created_at TEXT NOT NULL,
              updated_at TEXT_NOT_NULL
            );`,
            [],
            (txn, result) => {
              console.log('user_appointment table created successfully.');
            },
            (txn, error) => {
              console.log('Error creating user_appointment table: ', error);
            }
          );
          txn.executeSql(
            `CREATE TABLE IF NOT EXISTS notify (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              notify_id INTEGER,
              workspace_id TEXT NOT NULL,
              sender_id INTEGER,
              receiver_id TEXT NOT NULL,
              message TEXT NOT NULL,
              attachment TEXT NOT NULL,
              sender_name TEXT NOT NULL,
              sender_avatar TEXT NOT NULL,
              priority INTEGER,
              is_read INTEGER,
              status INTEGER,
              isMine INTEGER,
              private_key TEXT NOT NULL,
              created_at TEXT NOT NULL,
              updated_at TEXT_NOT_NULL
            );`,
            [],
            (txn, result) => {
              console.log('notify table created successfully.');
            },
            (txn, error) => {
              console.log('Error creating notify table: ', error);
            }
          );
          txn.executeSql(
            `CREATE TABLE IF NOT EXISTS pqcconnectionkey (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              workspace_id TEXT NOT NULL,
              conn_pub_key TEXT NOT NULL,
              conn_pvt_key TEXT NOT NULL,
              entity_id TEXT NOT NULL,
              entity_type INTEGER,
              created_at TEXT NOT NULL,
              updated_at TEXT_NOT_NULL
            );`,
            [],
            (txn, result) => {
              console.log('pqcconnectionkey table created successfully.');
            },
            (txn, error) => {
              console.log('Error creating pqcconnectionkey table: ', error);
            }
          );
          
        });

      } catch (error) {
        console.log('Error opening database:', error);
      }
    };

    openDB();

    // Return cleanup function to close the DB when the component unmounts
    return () => {
      SQLite.close();
    };
  }, []);

  return null;
};

export default DatabaseSetup;