import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DEFAULT_LOCALE } from '../i18n/i18n';
import { changeLocale } from '../actions/locale';

const Locale = ({
  Layout,
  onChangeLocale,
  locale,
  isLoading,
  errorMessage,
}) => (
  <Layout
    locale={locale}
    loading={isLoading}
    error={errorMessage}
    onChangeLocale={onChangeLocale}
  />
);

Locale.propTypes = {
  Layout: PropTypes.func.isRequired,
  locale: PropTypes.shape({
    userLocale: PropTypes.string,
  }),
  onChangeLocale: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
};

Locale.defaultProps = {
  errorMessage: null,
  locale: {
    userLocale: DEFAULT_LOCALE,
  },
};

const mapStateToProps = state => ({
  locale: state.locale || {},
  isLoading: state.status.loading || false,
  infoMessage: state.status.info || null,
  errorMessage: state.status.error || null,
  successMessage: state.status.success || null,
});

const mapDispatchToProps = {
  onChangeLocale: changeLocale,
};

export default connect(mapStateToProps, mapDispatchToProps)(Locale);
