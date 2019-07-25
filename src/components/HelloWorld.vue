<template>
  <div class="cont">
    <div class="row align-items-end">
      <div class="col col-md-6">
        <h3 class="display-3 text-capitalize">Developers</h3>
        <h4 class="display-4">Community That</h4>
        <h2>Defines Us By what we do</h2>
        <p></p>
      </div>
      <div class="col col-md-6">
        <div class="padding">
          <form action="#" method="post">
            <h5 class="mb-3">Create an Account</h5>
            <div class="form-style-ablify">
              <div class="form-row">
                <div class="col">
                  <input placeholder="Name" class="form-control" name="name" type="text" required />
                </div>
                <div class="col">
                  <input placeholder="Email" class="form-control" name="email" type="text" required />
                </div>
              </div>

              <input
                placeholder="Repository URL"
                name="repo"
                class="form-control"
                type="text"
                required
              />

              <div class="form-row">
                <div class="col">
                  <input
                    placeholder="Password"
                    class="form-control"
                    name="pass"
                    type="password"
                    required
                  />
                </div>

                <div class="col">
                  <input
                    placeholder="Confirm Password"
                    class="form-control"
                    name="pass"
                    type="password"
                    required
                  />
                </div>
              </div>

              <button class="btn">Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

.cont {
  background: url(../assets/images/banner5.jpg) no-repeat center;
  padding: 15px;
  color: #fff;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  height: auto;
}
</style>
