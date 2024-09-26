

export class ApiService{
    static BASE_URL = 'http://192.168.2.55:8083'
    static TM_API = "/tm-api/"
    static API = "/api/"
    static APP = "/app/"

    static async makeRequest(enpoint,method,body = null,headers={}){
        const url =  `${this.BASE_URL}${enpoint}`;
        try{
            console.log("url-----> ",url+"   "+JSON.stringify(body));
            const response = await fetch(url,{
                method:method,
                headers:{
                    'Content-Type': 'application/json',
                    headers,
                },
                body:JSON.stringify(body),
            });
            console.log(response);
            if (!response.ok){
                throw new Error(response.text || 'Api request failed');
            }
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            return jsonResponse;


        }catch(error){
            console.error('API request error :',error);
        }
    }

    //login model
    static async loginModel(){
        const body = {
            
        };
        return await this.makeRequest(`${this.TM_API}messenger/get-login-model`,'POST',body);
    }
    //forgot password email
    static async forgotPasswordEmail(email){
        const body = {
            email:email
        };
        return await this.makeRequest(`${this.TM_API}user/forgot-password/email`,'POST',body);
    }
    //forgot password Mobile
    static async forgotPasswordEmail(mobile){
      const body = {
        mobile:mobile
      };
      return await this.makeRequest(`${this.TM_API}user/forgot-password/mobile`,'POST',body);
  }
    //verify mail otp 
    static async verifyEmailOtp(email,otp){
        const body = {
            email:email,
            otp:otp
        };
        return await this.makeRequest(`${this.TM_API}user/verify-mail-otp`,'POST',body);
    }
    //verify mail otp 
    static async verifyMobileOtp(mobile,otp){
      const body = {
        mobile:mobile,
          otp:otp
      };
      return await this.makeRequest(`${this.TM_API}user/verify-mobile-otp`,'POST',body);
  }
    // change mail password
    static async changeMobilePassword(mobile,otp,password){
        const body = {
            mobile:mobile,
            otp:otp,
            password:password
        };
        return await this.makeRequest(`${this.TM_API}user/change-mobile-password`,'POST',body);
    }
    //company ping
    static async pingCompanyUrl(){
        const body = {
        };
        return await this.makeRequest(`${this.TM_API}company/ping`,'POST',body);
    }
    //login api
    static async login(userName,mobileNumber){
        const body = {
            username :userName,
            password:mobileNumber, 
            ldap_sso:1
        };
        return await this.makeRequest(`${this.TM_API}user/login`,'POST',body);
    }
    //register
    static async register(userName,mobileNumber){
        const body = {
            username :userName,
            mobile:mobileNumber, 
        };
        return await this.makeRequest(`${this.TM_API}user/register`,'POST',body);
    }
    //logout
    static async logout(token,deviceId,userid) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const body = {
            device_id :deviceId,
            user_id:userid, 
        };
    
        return await this.makeRequest(`${this.TM_API}user/logout`, 'POST', body, headers);
     }
     //remove device id
     static async removeDeviceId(token,deviceId,userid) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const body = {
            device_id :deviceId,
            user_id:userid, 
        };
    
        return await this.makeRequest(`${this.TM_API}messenger/remove-device-id`, 'POST', body, headers);
     }
     //fetch offline messages
     static async fetchOfflineMessages(token,lastMessageId) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const body = {
            last_message_id :lastMessageId
        };
    
        return await this.makeRequest(`${this.TM_API}messenger/get-offline-messages`, 'POST', body, headers);
     }
     //store fcm id 
     static async storeFcmId(token,devfcmToken,deviceType) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const body = {
            device_id :devfcmToken,
            device_type: deviceType
        };
        return await this.makeRequest(`${this.TM_API}messenger/store-device-id`, 'POST', body, headers);
     }
     //file upload
     static async uploadAttachment(formData) {
    
          const response = await axios.post(`${this.BASE_URL}${this.TM_API}messenger/upload-attachments`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
        return response;
     }
     //save feedback
     static async saveFeedBack(token,feedback,feedbackType,deviceInfo) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const body = {
            feedback :feedback,
            feedback_type: feedbackType,
            deviceInfo:deviceInfo
        };
        return await this.makeRequest(`${this.TM_API}messenger/save-feedback`, 'POST', body, headers);
     }
     // fetch global constants
     static async fetchGlobalConstants(token) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const body = {
            
        };
        return await this.makeRequest(`${this.TM_API}messenger/get-global-constants`, 'POST', body, headers);
     }
     //update user profilepic path
     static async updateUserProfilePicPath(token,path) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const body = {
            image_path:path
        };
        return await this.makeRequest(`${this.TM_API}user/update-user-profile-pic`, 'POST', body, headers);
     }
     //delete user profile pic
     static async deleteUserProfilePic(token) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const body = {
            
        };
        return await this.makeRequest(`${this.TM_API}user/delete-user-profile-pic`, 'POST', body, headers);
     }body
     //store multiple keys
     static async storeMultipleConnectionKeys(token,keys) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const body = {
            keys:keys
        };
        return await this.makeRequest(`${this.TM_API}user/e2ee/store-multiple-connection-key`, 'POST', body, headers);
     }
     //change password
     static async changePassword(token,oldPassword,newPassword) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const body = {
            old_password:oldPassword,
            new_password:newPassword
        };
        return await this.makeRequest(`${this.TM_API}user/change-password`, 'POST', body, headers);
     }
     //self user profileinfo
     static async selfUserProfileInfo(token,oldPassword,newPassword) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const body = {
           
        };
        return await this.makeRequest(`${this.TM_API}user/get-self-user-profile`, 'POST', body, headers);
     }
     //new register compnay
     static async newRegisterCompmay(userName,userEmail,userMobile,companyName,password,fullMobileNumber) {
        const body = {
            user_name:userName,
            user_email:userEmail,
            user_mobile:userMobile,
            company_name:companyName,
            password:password,
            user_full_mobile:fullMobileNumber
        };
        return await this.makeRequest(`${this.TM_API}company/new-register-company`, 'POST', body, headers);
     }
     //add new users
     static async addNewUsers(users,is_orange_member) {
        const body = {
            users:users,
            is_orange_member:is_orange_member
        };
        return await this.makeRequest(`${this.TM_API}company/add-new-users`, 'POST', body, headers);
     }
     //add new suggested users
     static async addNewSuggestedUsers(users,is_orange_member) {
        const body = {
            users:users,
            is_orange_member:is_orange_member
        };
        return await this.makeRequest(`${this.TM_API}company/save-suggested-users`, 'POST', body, headers);
     }
     //user approve or reject
     static async userApproveOrReject(suggest_user_id,is_orange_member) {
        const body = {
            suggest_user_id:suggest_user_id,
            status:1
        };
        return await this.makeRequest(`${this.TM_API}company/approve-suggested-user`, 'POST', body);
     }
     //resend verification mail
     static async resendVerificationEmail(token) {
        const headers = {
            Authorization: `Bearer ${token}`,
          };
        const body = {
            
        };
        return await this.makeRequest(`${this.TM_API}company/resend-verification-mail`, 'POST', body, headers);
     }
     //fetch suggested user list
     static async fetchSuggestedUsers(token) {
        const headers = {
            Authorization: `Bearer ${token}`,
          };
        const body = {
            
        };
        return await this.makeRequest(`${this.TM_API}company/get-suggested-users`, 'POST', body, headers);
     }
     //fetch suggested user count
     static async fetchSuggestedUsersCount(token) {
        const headers = {
            Authorization: `Bearer ${token}`,
          };
        const body = {
            
        };
        return await this.makeRequest(`${this.TM_API}company/get-suggested-users-count`, 'POST', body, headers);
     }
     //fetch company domains
     static async fetchCompanyDomains(token) {
        const headers = {
            Authorization: `Bearer ${token}`,
          };
        const body = {
            
        };
        return await this.makeRequest(`${this.TM_API}company/get-domains`, 'POST', body, headers);
     }
     //jointly code url
     static jointlyCodeUrl(token) {
        return `${this.BASE_URL}${this.TM_API}mobile/jointly-code?`;
     }
     //fetch attachment path
     static attachmentPath(token) {
        return `${this.BASE_URL}${this.TM_API}messenger/file-path?file=`;
     }
     //fetch mydeck file paths
     static mydeckFilePath(token) {
        return `${this.BASE_URL}${this.TM_API}filedeck/file/`;
     }
     //upload file deck file
     static async uploadFileDeckFile(formData) {
          const response = await axios.post(`${this.BASE_URL}${this.TM_API}filedeck/upload-file`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
        return response;
     }
     //upload mydeck file init
     static async uploadFileDeckFileInit(token,XContentLength,XContentName,XChunksQuantity,XFolderId,XRelativePath,XUserId) {
        const headers = {
            Authorization: `Bearer ${token}`,
            'X-Content-Length':XContentLength,
            'X-Content-Name':XContentName,
            'X-Chunks-Quantity':XChunksQuantity,
            'X-Folder-Id':XFolderId,
            'X-Relative-Path':XRelativePath,
            'X-User-Id':XUserId
          };
        const body = {
        
        };
        return await this.makeRequest(`${this.TM_API}filedeck/upload-file-init`, 'POST', body, headers);
     }
     //mydeck archive
     static async myDeckArchive(token,folder_id,file_id,parent_folder_id) {
        const headers = {
            Authorization: `Bearer ${token}`,
          };
        const body = {
            folder_id:folder_id,
            file_id:file_id,
            parent_folder_id:parent_folder_id
        };
        return await this.makeRequest(`${this.TM_API}filedeck/archive`, 'POST', body, headers);
     }
     //mydeck zip file download path
     static mydeckZipFileDownloadPath(token) {
        return `${this.BASE_URL}${this.TM_API}filedeck/download/zip/`;
     }
     //save Public key
     static async savePublicKey(token,public_key) {
        const headers = {
            Authorization: `Bearer ${token}`,
          };
        const body = {
            public_key:public_key
        };
        return await this.makeRequest(`${this.TM_API}user/e2ee/store-public-key`, 'POST', body, headers);
     }
     //fetch public key
     static async fetchPublicKey(token,entity_id,entity_type) {
        const headers = {
            Authorization: `Bearer ${token}`,
          };
        const body = {
            entity_id:entity_id,
            entity_type:entity_type
        };
        return await this.makeRequest(`${this.TM_API}user/e2ee/get-public-key`, 'POST', body, headers);
     }
     //save group keys
     static async storeGroupKeys(token,public_key,group_id,keys) {
        const headers = {
            Authorization: `Bearer ${token}`,
          };
        const body = {
            public_key:public_key,
            group_id:group_id,
            keys:keys
        };
        return await this.makeRequest(`${this.TM_API}messenger/e2ee/set-group-keys`, 'POST', body, headers);
     }
     //user authenticate
     static async userAuthenticate(token,password) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        password:password
      };
      return await this.makeRequest(`${this.TM_API}user/authenticate`, 'POST', body, headers);
    }
    //MFA send EMAIL pin
    static async mfaSendEmailPin(token,type) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        type:type
      };
      return await this.makeRequest(`${this.TM_API}user/mfa-send-email-pin`, 'POST', body, headers);
    }
    //MFA send SMS pin
    static async mfaSendSMSPin(token,type) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        type:type
      };
      return await this.makeRequest(`${this.TM_API}user/mfa-send-sms-pin`, 'POST', body, headers);
    }
    //save MFA pin
    static async saveMFAPin(token,type,pin,mfaAccessToken,pin_validation) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        type:type,
        pin:pin,
        token:mfaAccessToken,
        pin_validation:pin_validation
      };
      return await this.makeRequest(`${this.TM_API}user/save-mfa-pin`, 'POST', body, headers);
    }
    //verify MFA pin
    static async verifyMFAPin(token,type,pin,mfaAccessToken,pin_validation) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        type:type,
        pin:pin,
        token:mfaAccessToken,
        pin_validation:pin_validation
      };
      return await this.makeRequest(`${this.TM_API}user/verify-mfa-pin`, 'POST', body, headers);
    }
    // check MFA PIN set
    static async checkMFAPinSet(token,type) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        type:type
      };
      return await this.makeRequest(`${this.TM_API}user/is-mfa-pin-set`, 'POST', body, headers);
    }
    //fetch MFA pin
    static async fetchMFAPin(token) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
      };
      return await this.makeRequest(`${this.TM_API}user/get-mfa-pin`, 'POST', body, headers);
    }
    //MFA resend EMAIL pin
    static async mfaResendEmailPin(token,type,password,pin,mfaAccessToken) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        type:type,
        password:password,
        pin:pin,
        token:mfaAccessToken
      };
      return await this.makeRequest(`${this.TM_API}user/mfa-resend-email-pin`, 'POST', body, headers);
    }
    //MFA resend SMS pin
    static async mfaResendSMSPin(token,type,password,pin,mfaAccessToken) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        type:type,
        password:password,
        pin:pin,
        token:mfaAccessToken
      };
      return await this.makeRequest(`${this.TM_API}user/mfa-resend-sms-pin`, 'POST', body, headers);
    }
    //reset MFA pin
    static async resetMFAPin(token,type,password,pin) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        type:type,
        password:password,
        pin:pin
      };
      return await this.makeRequest(`${this.TM_API}user/reset-mfa-pin`, 'POST', body, headers);
    }
     //change MFA pin
     static async changeMFAPin(token,type,old_pin,pin,new_pin) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        type:type,
        old_pin:old_pin,
        new_pin:new_pin
      };
      return await this.makeRequest(`${this.TM_API}user/change-mfa-pin`, 'POST', body, headers);
    }
    //fetch Authorization unit users
    static async fetchAuthorizationUnitUsers(token,search_key,department,designation,location,unit) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        search_key:search_key,
        department:department,
        designation:designation,
        location:location,
        unit:unit
      };
      return await this.makeRequest(`${this.TM_API}messenger/get-authorization-unit-users`, 'POST', body, headers);
    }
    //fetch autorization request users
    static async fetchRequestedAuthorizationUsers(token,reason) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        reason:reason
      };
      return await this.makeRequest(`${this.TM_API}messenger/request-user-authorisation`, 'POST', body, headers);
    }
    //fetch received autorization request users
    static async fetchReceivedRequestedAuthorizationUsers(token) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
      };
      return await this.makeRequest(`${this.TM_API}messenger/get-received-user-request-authorization`, 'POST', body, headers);
    }
    //fetch sent autorization request users
    static async fetchSentRequestedAuthorizationUsers(token) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
      };
      return await this.makeRequest(`${this.TM_API}messenger/get-sent-user-request-authorization`, 'POST', body, headers);
    }
    //update user request authorization
    static async fetchUpdateUserRequestedAuthorization(token,status,id) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        status:status,
        id:id
      };
      return await this.makeRequest(`${this.TM_API}messenger/update-user-request-authorization`, 'POST', body, headers);
    }
    //revoke user request authorization
    static async revokeUserRequestedAuthorization(token,id) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        id:id
      };
      return await this.makeRequest(`${this.TM_API}messenger/revoke-user-request-authorization`, 'POST', body, headers);
    }
    //fetch all units
    static async fetchAllUnits(token,unit_id) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        unit_id:unit_id
      };
      return await this.makeRequest(`${this.TM_API}messenger/get-all-units`, 'POST', body, headers);
    }
    //fetch is global users
    static async fetchGlobalUsers(token,user_id) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        user_id:user_id
      };
      return await this.makeRequest(`${this.TM_API}messenger/is-global-user`, 'POST', body, headers);
    }
    //save user authorization
    static async saveUserAuthorization(token,user_id) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        user_id:user_id
      };
      return await this.makeRequest(`${this.TM_API}messenger/save-user-authorisation`, 'POST', body, headers);
    }
    //fetch authorization unit user data
    static async fetchAuthorizationUnitUserData(token,user_id) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        user_id:user_id
      };
      return await this.makeRequest(`${this.TM_API}messenger/get-authorization-unit-user-data`, 'POST', body, headers);
    }
    //schedule cattle call
    static async scheduleCattleCall(token,title,description,date,from_time,timezone,users,emails,to_time,user_id,meeting_id,id) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        title:title,
        description:description,
        date:date,
        from_time:from_time,
        timezone:timezone,
        users:users,
        emails:emails,
        to_time:to_time,
        user_id:user_id,
        meeting_id:meeting_id,
        id:id
      };
      return await this.makeRequest(`${this.TM_API}messenger/schedule-cattle-call`, 'POST', body, headers);
    }
    //schedule adhoc cattle call
    static async scheduleCattleCall(token,users,emails,user_id,timezone) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        users:users,
        emails:emails,
        user_id:user_id,
        timezone:timezone
      };
      return await this.makeRequest(`${this.TM_API}messenger/schedule-adhoc-cattle-call`, 'POST', body, headers);
    }
    //fetch all cattle call upcoming meetings
    static async fetchCattleCallUpComingMeetings(token) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
      };
      return await this.makeRequest(`${this.TM_API}messenger/get-cattle-call-meetings`, 'POST', body, headers);
    }
    //fetch all cattle call archive meetings
    static async fetchCattleCallArchiveMeetings(token) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
      };
      return await this.makeRequest(`${this.TM_API}messenger/get-cattle-call-archive-meetings`, 'POST', body, headers);
    }
    //fetch all cattle call meeting data by id
    static async fetchCattleCallMeetingDataById(token,id) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        id:id
      };
      return await this.makeRequest(`${this.TM_API}messenger/get-cattle-call-meeting-data-id`, 'POST', body, headers);
    }
    //fetch all cattle call meeting data by meeting id
    static async fetchCattleCallMeetingDataById(token,meeting_id) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        meeting_id:meeting_id
      };
      return await this.makeRequest(`${this.TM_API}messenger/get-cattle-call-meeting-data`, 'POST', body, headers);
    }
    //cancel cattle call meeting
    static async cancelCattleCallMeeting(token,id) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        id:id
      };
      return await this.makeRequest(`${this.TM_API}messenger/cancel-cattle-call-meeting`, 'POST', body, headers);
    }
    //update cattle call meeting user status
    static async updateCattleCallUserStatus(token,meeting_id,status,message_id) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        meeting_id:meeting_id,
        status:status,
        message_id:message_id
      };
      return await this.makeRequest(`${this.TM_API}messenger/update-cattle-call-user-status`, 'POST', body, headers);
    }
    //fetch start cattle call and meeting data
    static async fetchStartCattleCallData(token,meeting_id,id) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        meeting_id:meeting_id,
        id:id,
      };
      return await this.makeRequest(`${this.TM_API}messenger/get-start-cattle-call-data`, 'POST', body, headers);
    }
    //fetch join cattle call and meeting data
    static async fetchJoinCattleCallData(token,meeting_id,id) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        meeting_id:meeting_id,
        id:id,
      };
      return await this.makeRequest(`${this.TM_API}messenger/get-join-cattle-call-data`, 'POST', body, headers);
    }
    //fetch Company details
    static async fetchCompanyDetails(token,meeting_id,id) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
      };
      return await this.makeRequest(`${this.TM_API}messenger/get-company-details`, 'POST', body, headers);
    }
    //fetch E-File list
    static async fetchEFileList(token,appointment_id) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        appointment_id:appointment_id
      };
      return await this.makeRequest(`${this.TM_API}admin/dashboard/e-file-list`, 'POST', body, headers);
    }
    //submit E-File Disucssion
    static async submitEFileDiscussion(token,topic_id,appointment_id,active_efile) {
      const headers = {
          Authorization: `Bearer ${token}`,
        };
      const body = {
        topic_id:topic_id,
        appointment_id:appointment_id,
        active_efile:active_efile
      };
      return await this.makeRequest(`${this.TM_API}admin/dashboard/e-file-chat`, 'POST', body, headers);
    }
    //fetch all notify messages
    static async fetchAllNotifyMessages(token){
      const headers = {
          Authorization: `Bearer ${token}`,
        };
        const body = {
        };
        return await this.makeRequest(`${this.TM_API}messenger/get-all-notifiers`, 'POST', body, headers);
   }
    //sync notify messages
    static async syncNotifyMessages(token,last_updated_time,user_id,device_type,platform){
      const headers = {
          Authorization: `Bearer ${token}`,
        };
        const body = {
          last_updated_time:last_updated_time,
          user_id:user_id,
          device_type:device_type,
          platform:platform
        };
        return await this.makeRequest(`${this.TM_API}messenger/sync-notifiers`, 'POST', body, headers);
   }
    //check saml sso status
    static async checkSamlSsoStatus(token,accessToken){
      const headers = {
          Authorization: `Bearer ${token}`,
        };
        const body = {
          accessToken:accessToken
        };
        return await this.makeRequest(`${this.TM_API}user/saml-sso-status`, 'POST', body, headers);
   }
   //fetch saml sso data
   static async fetchSamlSsoData(token,accessToken){
    const headers = {
        Authorization: `Bearer ${token}`,
      };
      const body = {
        accessToken:accessToken
      };
      return await this.makeRequest(`${this.TM_API}user/saml-sso-data`, 'POST', body, headers);
    }
    //fetch SAML Browser url
    static fetchSAMLBrowserUrl(token) {
      return `${this.BASE_URL}/user/sso/saml/login?p=mobile`;
   }
   //fetch Group chat history
   static async fetchGroupChatHistory(token,entity_id,last_message_id,reply_message_id,devie_type,platform){
    const headers = {
        Authorization: `Bearer ${token}`,
      };
      const body = {
        entity_id:entity_id,
        last_message_id:last_message_id,
        reply_message_id:reply_message_id,
        devie_type:devie_type,
        platform:platform
      };
      return await this.makeRequest(`${this.TM_API}messenger/group-chat-history`, 'POST', body, headers);
    }
    //sync auto delete
   static async syncAutoDelete(token,last_updated_time){
    const headers = {
        Authorization: `Bearer ${token}`,
      };
      const body = {
        last_updated_time:last_updated_time
      };
      return await this.makeRequest(`${this.TM_API}messenger/sync-auto-delete`, 'POST', body, headers);
    }
    //fetch role data
   static async fetchRoleData(token){
    const headers = {
        Authorization: `Bearer ${token}`,
      };
      const body = {
      };
      return await this.makeRequest(`${this.TM_API}messenger/get-role-data`, 'POST', body, headers);
    }
    //fetch coordinates
   static async fetchCoordinates(token){
    const headers = {
        Authorization: `Bearer ${token}`,
      };
      const body = {
      };
      return await this.makeRequest(`${this.TM_API}messenger/get-coordinates`, 'POST', body, headers);
    }
    //fetch group coordinates list
   static async fetchGroupCoordinates(token,group_id){
    const headers = {
        Authorization: `Bearer ${token}`,
      };
      const body = {
        group_id:group_id
      };
      return await this.makeRequest(`${this.TM_API}messenger/get-group-coordinates`, 'POST', body, headers);
    }
    //fetch multiparty tracking history
   static async fetchMultipleTrackingHistory(token,last_id,filter){
    const headers = {
        Authorization: `Bearer ${token}`,
      };
      const body = {
        last_id:last_id,
        filter:filter
      };
      return await this.makeRequest(`${this.TM_API}messenger/get-multi-party-tracking-history`, 'POST', body, headers);
    }
     //fetch multiparty tracking data
   static async fetchMultipleTrackingData(token,tracking_id){
    const headers = {
        Authorization: `Bearer ${token}`,
      };
      const body = {
        tracking_id:tracking_id
      };
      return await this.makeRequest(`${this.TM_API}messenger/get-multi-party-tracking-data`, 'POST', body, headers);
    }
    //store connection key
   static async storeConnectionKey(token,conn_pub_key,entity_id,entity_type){
    const headers = {
        Authorization: `Bearer ${token}`,
      };
      const body = {
        conn_pub_key:conn_pub_key,
        entity_id:entity_id,
        entity_type:entity_type
      };
      return await this.makeRequest(`${this.TM_API}user/e2ee/store-connection-key`, 'POST', body, headers);
    }
    //fetch connection key
   static async fetchConnectionKey(token,entity_id,entity_type){
    const headers = {
        Authorization: `Bearer ${token}`,
      };
      const body = {
        entity_id:entity_id,
        entity_type:entity_type
      };
      return await this.makeRequest(`${this.TM_API}user/e2ee/get-connection-key`, 'POST', body, headers);
    }
    //fetch all connection key
   static async fetchAllConnectionKey(token){
    const headers = {
        Authorization: `Bearer ${token}`,
      };
      const body = {
      };
      return await this.makeRequest(`${this.TM_API}user/e2ee/get-all-connection-keys`, 'POST', body, headers);
    }
    //check blacked listed file
   static async checkBlackedListedFile(token){
    const headers = {
        Authorization: `Bearer ${token}`,
      };
      const body = {
      };
      return await this.makeRequest(`${this.TM_API}messenger/is-blacklisted-file`, 'POST', body, headers);
    }
     //sync contacts
     static async syncContacts(token){
        const headers = {
            Authorization: `Bearer ${token}`,
          };
      
          return await this.makeRequest(`${this.API}get-messenger-contacts`, 'POST', null, headers);
     }
     //fetch permissions
     static async fetchPermission(token){
        const headers = {
            Authorization: `Bearer ${token}`,
          };
      
          return await this.makeRequest(`${this.API}get-permissions`, 'POST', null, headers);
     }
     //fetch all messages
     static async fetchAllMessages(token){
        const headers = {
            Authorization: `Bearer ${token}`,
          };
      
          return await this.makeRequest(`${this.API}get-messages`, 'POST', null, headers);
     }
     //fetch more conversations
     static async fetchMoreConversationMessages(token){
        const headers = {
            Authorization: `Bearer ${token}`,
          };
      
          return await this.makeRequest(`${this.API}get-conversation`, 'POST', null, headers);
     }
     //fetch message info
     static async fetchMessageInfo(token){
        const headers = {
            Authorization: `Bearer ${token}`,
          };
      
          return await this.makeRequest(`${this.API}get-message-info`, 'POST', null, headers);
     }
     //fetch group data
     static async fetchGroupData(token){
        const headers = {
            Authorization: `Bearer ${token}`,
          };
      
          return await this.makeRequest(`${this.API}get-group-data`, 'POST', null, headers);
     }
     //fetch multiple group details
     static async fetchMultipleGroupData(token){
        const headers = {
            Authorization: `Bearer ${token}`,
          };
      
          return await this.makeRequest(`${this.API}get-multiple-group-details`, 'POST', null, headers);
     }
     //fetch updated messenger contacts
     static async syncUpdatedContacts(token){
        const headers = {
            Authorization: `Bearer ${token}`,
          };
      
          return await this.makeRequest(`${this.API}get-updated-messenger-contacts`, 'POST', null, headers);
     }
     //fetch search text from server
     static async fetchSearchMessages(token){
        const headers = {
            Authorization: `Bearer ${token}`,
          };
      
          return await this.makeRequest(`${this.API}search-text`, 'POST', null, headers);
     }
     //fetch single conversation search messages
     static async fetchSingleConversationSearchMessages(token){
        const headers = {
            Authorization: `Bearer ${token}`,
          };
      
          return await this.makeRequest(`${this.API}get-single-search-conversation`, 'POST', null, headers);
     }
     //fetch search text count
     static async fetchSearchTextCount(token){
        const headers = {
            Authorization: `Bearer ${token}`,
          };
      
          return await this.makeRequest(`${this.API}search-text-count`, 'POST', null, headers);
     }
     //fetch single search conversation search text count
     static async fetchSingleConversationSearchTextCount(token){
        const headers = {
            Authorization: `Bearer ${token}`,
          };
      
          return await this.makeRequest(`${this.API}single-search-text-count`, 'POST', null, headers);
     }
     //fetch filedeck meta info
     static async fetchFileDeckMetaInfo(token){
        const headers = {
            Authorization: `Bearer ${token}`,
          };
      
          return await this.makeRequest(`${this.API}get-filedeck-meta-info`, 'POST', null, headers);
     }
     //sync mydeck data
     static async syncMyDeck(token){
        const headers = {
            Authorization: `Bearer ${token}`,
          };
      
          return await this.makeRequest(`${this.API}get-mydeck-sync-data`, 'POST', null, headers);
     }
     //fetch user appointments
     static async fetchUserAppointments(token){
        const headers = {
            Authorization: `Bearer ${token}`,
          };
      
          return await this.makeRequest(`${this.API}get-user-appointments`, 'POST', null, headers);
     }
     //fetch group logs
     static async fetchGroupLogs(token){
        const headers = {
            Authorization: `Bearer ${token}`,
          };
      
          return await this.makeRequest(`${this.API}get-group-logs`, 'POST', null, headers);
     }
     //fetch group chat history delete
     static async fetchGroupChatHistoryDelete(token,group_id,type,entity_id,entity_type,user_id){
      const headers = {
          Authorization: `Bearer ${token}`,
        };
        const body={
          group_id:group_id,
          type:type,
          entity_id:entity_id,
          entity_type:entity_type,
          user_id:user_id
        };
        return await this.makeRequest(`${this.APP}group-chat-history-delete`, 'POST', body, headers);
   }
   //clear chat history
   static async clearChatHistory(token,group_id,type,entity_id,entity_type,user_id){
    const headers = {
        Authorization: `Bearer ${token}`,
      };
      const body={
        group_id:group_id,
        type:type,
        entity_id:entity_id,
        entity_type:entity_type,
        user_id:user_id
      };
      return await this.makeRequest(`${this.APP}clear-chat-history`, 'POST', body, headers);
    }
     //verify QR code
   static async verifyQRCode(token,access_token,data,socket_id,device_type,pvk,platform){
    const headers = {
        Authorization: `Bearer ${token}`,
      };
      const body={
        access_token:access_token,
        data:data,
        socket_id:socket_id,
        device_type:device_type,
        pvk:pvk,
        platform:platform
      };
      return await this.makeRequest(`${this.APP}qr-code-verify`, 'POST', body, headers);
    }
     //new group create
   static async createNewGroup(token,group_name,created_by,group_members,group_avatar,group_description,tm_appointment_id){
    const headers = {
        Authorization: `Bearer ${token}`,
      };
      const body={
        group_name:group_name,
        created_by:created_by,
        group_members:group_members,
        group_avatar:group_avatar,
        group_description:group_description,
        tm_appointment_id:tm_appointment_id
      };
      return await this.makeRequest(`${this.APP}create-group-new`, 'POST', body, headers);
    }
    //update group data
   static async createNewGroup(token,group_id,user_id,platform,payload,delete_group){
    const headers = {
        Authorization: `Bearer ${token}`,
      };
      const body={
        group_id:group_id,
        user_id:user_id,
        platform:platform,
        payload:payload,
        delete_group:delete_group
      };
      return await this.makeRequest(`${this.APP}update-group-data`, 'POST', body, headers);
    }
    //add group members into existing group
   static async createNewGroup(token,group_id,user_id,platform,payload,group_members){
    const headers = {
        Authorization: `Bearer ${token}`,
      };
      const body={
        group_id:group_id,
        user_id:user_id,
        platform:platform,
        payload:payload,
        group_members:group_members
      };
      return await this.makeRequest(`${this.APP}add-group-members`, 'POST', body, headers);
    }
}