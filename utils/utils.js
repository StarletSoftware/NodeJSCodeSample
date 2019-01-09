
module.exports = {
  response(status, umsg = undefined, dmsg = undefined, data = undefined) {
      return {success: status, umsg: umsg, dmsg: dmsg, data: data}
  }
}
