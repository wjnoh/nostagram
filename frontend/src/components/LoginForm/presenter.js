import React from "react";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import formStyles from "shared/formStyles.scss";

const LoginForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <form className={formStyles.form} onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder={context.t("Username")}
        className={formStyles.textInput}
        value={props.usernameValue}
        onChange={props.handleInputChange}
        name="username"
        required
      />
      <input
        type="password"
        placeholder={context.t("Password")}
        className={formStyles.textInput}
        value={props.passwordValue}
        onChange={props.handleInputChange}
        name="password"
        required
      />
      <input
        type="submit"
        value={context.t("Log in")}
        className={formStyles.button}
      />
    </form>
    <span className={formStyles.divider}>or</span>
    <span className={formStyles.facebookLink}>
      <FacebookLogin
        appId="2020183698279673"
        autoLoad={false}
        fields="name,email,picture"
        callback={props.handleFacebookLogin}
        cssClass={formStyles.facebookLink}
        icon="fa-facebook-official"
        textButton={context.t("Log in with Facebook")}
      />
    </span>
    <span className={formStyles.forgotLink}>
      {context.t("Forgot Password?")}
    </span>
  </div>
);

LoginForm.contextTypes = {
  t: PropTypes.func.isRequired
};

LoginForm.propTypes = {
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFacebookLogin: PropTypes.func.isRequired
};

export default LoginForm;
