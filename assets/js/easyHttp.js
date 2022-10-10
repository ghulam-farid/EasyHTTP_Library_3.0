/* 
* @version 3.0.0
* @author: Ghulam Farid
* @description Easy HTTP Library
* @license MIT
*/

const checkFetch = (response) => {
  if (!response.ok) {
    throw Error(response.status + " " + response.url);
  }
  return;
};

class EasyHttp {
  async get(url) {
    const response = await fetch(url);
    checkFetch(response);
    const res = await response.json();
    return res;
  }

  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    checkFetch(response);
    const resData = await response.json();
    return resData;
  }

  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    checkFetch(response);
    const resData = await response.json();
    return resData;
  }

  async delete(url) {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      checkFetch(response);
      const resData = await 'Resource Delete ...';
      return resData;
  }
}
