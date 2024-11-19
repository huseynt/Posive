// import { resetToken } from '../Hooks/useToken';
import { resetToken } from '../Hooks/useToken';
import { getToken } from '../reUse/getToken';
import { userRole } from '../reUse/user';
import { createRefreshToken } from './refreshToken';
import { IcreatePostAuthenticate, 
    IVerifyEmail, 
    IChangePassword, 
    ISaveUserData, 
    ISavePreferences, 
    ISavePlans, 
    IPostOrders, 
    IPostCardData, 
    IVerifyCardData, 
    ISaveOrder, 
    IUpdateProduct,
    IAddProduct,
    IGetGeneral,
    IUpdateUserPermissions,
    SaveNotificationsParams
} from './types';

// Base
// export const API = import.meta.env.VITE_API_URL
export const base = import.meta.env.VITE_BASE


// Authenticate User
export const createPostAuthenticate = async (body: IcreatePostAuthenticate) => {
    // ------- FOR TEST ------
    if (body.email === 'test@mail.ru' || body.password === 'test') {
        sessionStorage.setItem('access_token', 'test');
        sessionStorage.setItem('refresh_token', 'test');
    }
    // ------- FOR TEST ------
    const res = await fetch(`${base}/v1/auth/authenticate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res);
}


// Register User
export const createPostRegister = async (body: IcreatePostAuthenticate) => {
    const res = await fetch(`${base}/v1/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res);
}

// Reset Password
export const createResetPassword = async (email: string) => {
    const res = await fetch(`${base}/mail/verifyEmail?email=${email}`, {
        method: 'GET',
    });
    if (res.ok) {
        return "Success";
    }
    return "Error";
}
// Verify Email
export const createVerifyEmail = async (data: IVerifyEmail) => {
    const res = await fetch(`${base}/mail/verifyPassword?email=${data.email}&confirmPassword=${data.confirmPassword}`, {
        method: 'GET',
    });
    if (res.ok) {
        return "Success";
    }
    return "Error";
}

// Change Password
export const createPostChangePassword = async (body: IChangePassword) => {
    const res = await fetch(`${base}/v1/auth/changePassword`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    if (res.ok) {
        return "Success";
    }
    return "Error";
}

//---------------------------------------------------------------------------------------------------------------

// Get User
export const createGetUser = async () => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/v1/auth/getUser`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });
        if (res.ok) {
            return res.json();
        }
        // return Promise.reject(res);
        // else {
        //     return "Error";
        // }

        else if (res.status === 400) {
            createRefreshToken();
        }
        else {
            resetToken();
            return "Error";
        }

    } catch (error) {
        // resetToken();
        console.log(error);
    }
}

// Save User
export const createSaveUser = async (data: ISaveUserData) => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/account/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        });
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}

// Delete User
export const createDeleteUser = async () => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/account/deleting`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });
        if (res.ok) {
            return "Success";
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}

//---------------------------------------------------------------------------------------------------------------


// Get meals
export const createGetMeals = async () => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/product/get`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}

//  Post Orders
export const createPostOrders = async (data: IPostOrders) => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/order/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        });
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}

// Post CardData
export const createPostCardData = async (data: IPostCardData) => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/payment/find`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        });
        if (res) {
            console.log(res);
            return res.status;
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}

// Verify CardData
export const createVerifyCardData = async ({ confirmPassword }: IVerifyCardData) => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/mail/verifyPasswordPayment?confirmPassword=${confirmPassword}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
        });
        if (res) {
            return res.status;
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}


// Get tables
export const createGetTables = async () => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/tables/get`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}

//  ---------------------------------------------------------------------------------------------------------

//  Get orders (Overview)
interface GetOrdersParams {
    page?: number;
    size?: number;
    date?: string;
    filter?: string;
}
export const createGetOrders = async ({ page, size, date, filter }: GetOrdersParams) => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/order/get?page=${page}&size=${size}&date=${date}&filter=${filter}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}

// Save orders (Overview)
export const createSaveOrders = async (data: ISaveOrder) => {
    const role = await userRole();
    try {
        if (role === "ADMIN" || role === "SUPER_ADMIN") {
            const token = await getToken();
            const accessToken = token?.accessToken;
            const res = await fetch(`${base}/order/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(data)
            });
            if (res.ok) {
                return res.json();
            }
        }
        return Promise.reject();
    } catch (error) {
        console.log(error);
    }
}

// Delete orders (Overview)
export const createDeleteOrders = async (id: string) => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/order/delete?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });
        if (res.ok) {
            return "Success";
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}

// Delete orders all (Overview)
export const createDeleteOrdersAll = async (data: number[]) => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/order/deleteALL`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        });
        if (res.ok) {
            return "Success";
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}

// Get statistics with params (months, years)
export const createGetStatistics = async (months: string, year: number) => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/order/incomeByMonth?months=${months}&year=${year}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}


// Get Products
interface GetProductsParams {
    page?: number;
    size?: number;
    filter?: string;
}
export const createGetProducts = async ({ page, size, filter }: GetProductsParams) => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/product/getALL?page=${page}&size=${size}&filter=${filter}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}



// Delete product
export const createDeleteProduct = async (receiptNo: string) => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/product/deleteBy?product=${receiptNo}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });
        if (res.ok) {
            return "Success";
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}

// Change product
export const createChangeProduct = async (data: IUpdateProduct) => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/product/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        });
        if (res.ok) {
            return "Success";
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}


// Add product
export const createAddProduct = async (data: IAddProduct) => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/product/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        });
        if (res.ok) {
            return "Success";
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}

// Get Setting General 
export const createGetSettingGeneral = async () => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/general/get`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}

// Save Setting General
export const createSaveSettingGeneral = async (data: IGetGeneral) => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/general/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        });
        if (res.ok) {
            return "Success";
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}

// Save Preferences
export const createSavePreferences = async (data: ISavePreferences) => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/setting/save`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        });
        if (res.ok) {
            return res.status;
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}

// get Subscriptions
export const createGetPlans = async () => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/subscriptions/getByEmail`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}

// Save Subscriptions 
export const createPostPlans = async (data: ISavePlans) => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/subscriptions/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        });
        if (res.ok) {
            return res.status;
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}

// Get User Permissions
interface GetUsersParams {
    page?: number;
    size?: number;
}
export const createGetUsers = async ({ page, size }: GetUsersParams) => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/user_permission/getAll?page=${page}&size=${size}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}


// Edit User Permissions
export const createEditUserPermissions = async (data: IUpdateUserPermissions) => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/user_permission/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        });
        if (res.ok) {
            return "Success";
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}

// Delete User
export const createDeleteUserPermission = async (email: string) => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/user_permission/delete?email=${email}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });
        if (res.ok) {
            return "Success";
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}

// Delete User by email
export const createDeletePermissionUserAll = async (data: string[]) => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/user_permission/deleteAll`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        });
        if (res.ok) {
            return "Success";
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}

// Get Notifications
export const createGetNotifications = async () => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/notifications/get`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}


// Save Notifications
export const createSaveNotifications = async (params: SaveNotificationsParams) => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/notifications/save?nList=${params.nlist}&mList=${params.mlist}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
        });
        if (res.ok) {
            return res.status;
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}


// google auth 
export const createGoogleAuth = async (idToken: string) => {
    const res = await fetch(`${base}/v1/auth/google?idToken=${idToken}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res);
}


// get notifications
export const createNotifications = async () => {
    try {
        const token = await getToken();
        const accessToken = token?.accessToken;
        const res = await fetch(`${base}/not/get`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    } catch (error) {
        console.log(error);
    }
}