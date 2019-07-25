<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <about-info />
    <services-info />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import AboutInfo from "@/views/About.vue";
import ServicesInfo from "@/components/Services.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    AboutInfo,
    ServicesInfo
  }
};
</script>

<style>
section#about {
  background: #f4b200;
}
.about-info p {
  color: #ffffff;
}
.vv-border-info {
  margin: 0 auto;
  width: 80%;
  border: 1px solid #ddd;
  padding: 4em;
  border-radius: 4px;
  background: transparent;
}

h4.title-hny {
  color: #ffffff;
  font-size: 2em;
  line-height: 1.5em;
}

.sub-tittle-vjm {
  display: block;
  font-size: 0.7em;
  color: #999;
  letter-spacing: 1px;
}

.team-info h4 {
  font-size: 1.4em;
  margin-bottom: 0.5em;
}
.read-more-button {
  margin-top: 1.2em;
}

.read-more,
.read-more:hover {
  background: #011144;
  color: #fff;
  padding: 0.8em 2em;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.15);
  font-size: 1em;
  display: inline-block;
  border: none;
  transition: all 500ms ease;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1.5em;
}

.read-more:hover {
  opacity: 0.9;
}

/*-- services --*/

.service-icon span.fa {
  font-size: 40px;
  color: #f4b200;
}
.service-grid h4 {
  font-size: 22px;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 2px;
}
/*-- //services --*/
.bg-image-left {
  background: url(../assets/images/s1.jpg) no-repeat center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  min-height: 450px;
  margin: 5px;
}
.bg-image-right {
  background: url(../assets/images/s2.jpg) no-repeat center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  min-height: 250px;
  margin: 5px;
}
.bg-image-bottom1 {
  background: url(../assets/images/s3.jpg) no-repeat center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  min-height: 190px;
  margin: 5px;
}
.bg-image-bottom2 {
  background: url(../assets/images/s4.jpg) no-repeat center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  min-height: 190px;
  margin: 5px;
}

.bg-image-left h4 {
  padding-top: 350px;
  text-align: center;
  color: #fff;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-size: 24px;
  background: rgba(0, 0, 0, 0.4);
  min-height: 450px;
}
.bg-image-right h4 {
  padding-top: 170px;
  text-align: center;
  color: #fff;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-size: 24px;
  background: rgba(0, 0, 0, 0.4);
  min-height: 250px;
}
.bg-image-bottom1 h4,
.bg-image-bottom2 h4 {
  padding-top: 120px;
  text-align: center;
  color: #fff;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-size: 22px;
  background: rgba(0, 0, 0, 0.4);
  min-height: 190px;
}
/*-- //about bottom --*/

input[type="button"],
input[type="submit"],
input[type="text"],
input[type="email"],
input[type="search"] {
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
}

.form-style-ablify input[type="text"],
.form-style-ablify input[type="email"],
.form-style-ablify input[type="password"],
select {
  outline: none;
  font-size: 14px;
  border: none;
  color: #666;
  background: #f1f1f1;
  letter-spacing: 0.5px;
  padding: 14px 20px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 15px;
}
.form-style-ablify button.btn {
  color: #fff;
  background: #f4b200;
  border: none;
  padding: 14px 0;
  outline: none;
  border-radius: 0;
  width: 100%;
  font-size: 15px;
  cursor: pointer;
  letter-spacing: 1px;
  -webkit-transition: 0.5s all;
  -o-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -ms-transition: 0.5s all;
  transition: 0.5s all;
}
.form-style-ablify input[type="submit"]:hover {
  background: #dc3545;
}

.form-style-ablify input[type="submit"]:hover {
  background: #dc3545;
}
.padding {
  padding: 2.5em;
  background-color: rgba(1, 17, 68, 0.17);
}

@media (max-width: 568px) {
  .padding {
    padding: 1em;
  }
  .form-style-ablify input[type="text"],
  .form-style-ablify input[type="email"],
  .form-style-ablify input[type="password"],
  select {
    width: 100%;
  }
  .read-more-button {
    margin-bottom: 2em;
  }
  h4.title-hny {
    font-size: 1.8em;
  }
  .team-grid img {
    width: 100%;
  }
}
@media (max-width: 480px) {
  h3.b-w3ltxt {
    font-size: 2em;
  }
  span.fa.fa-ils {
    font-size: 1em;
  }
  .w3ls_banner_txt h4 {
    font-size: 1.5em;
  }
  .w3ls_banner_txt p {
    font-size: 1.5em;
  }
  .padding h5 {
    font-size: 18px;
  }
  h4.title-hny {
    font-size: 1.5em;
  }
  .banner-text-w3ls {
    padding: 21vw 0 2vw;
  }
  .footer-content h2 a {
    font-size: 0.9em;
  }
  h3.heading {
    font-size: 25px;
  }
}
@media (max-width: 414px) {
  .banner-text-w3ls {
    padding: 24vw 0 1vw;
  }
  .rating ul li {
    font-size: 1.2em;
  }
  .copy-right {
    letter-spacing: 0px;
  }
}
@media (max-width: 384px) {
  h3.heading {
    letter-spacing: 1px;
  }
}
@media (max-width: 375px) {
  h3.heading {
    letter-spacing: 0px;
  }
}
/*-- //Responsive design --*/
</style>
