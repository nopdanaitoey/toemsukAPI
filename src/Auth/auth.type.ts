export interface LazadaUser {
    access_token:           string;
    country:                string;
    refresh_token:          string;
    country_user_info_list: CountryUserInfoList[];
    account_platform:       string;
    refresh_expires_in:     number;
    expires_in:             number;
    account:                string;
    code:                   string;
    request_id:             string;
}

export interface CountryUserInfoList {
    country:    string;
    user_id:    string;
    seller_id:  string;
    short_code: string;
}
