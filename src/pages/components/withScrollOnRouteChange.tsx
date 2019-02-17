import React from "react";

export default function withScrollOnRouteChange(
  WrappedComponent: React.ComponentType<any>
) {
  return class WithScrollOnRouteChange extends React.Component {
    hashLinkScroll() {
      const { hash } = window.location;
      if (hash !== "") {
        // Push onto callback queue so it runs after the DOM is updated,
        // this is required when navigating from a different page so that
        // the element is rendered on the page before trying to getElementById.
        setTimeout(() => {
          const id = hash.replace("#", "");
          const element = document.getElementById(id);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }

    render() {
      this.hashLinkScroll();
      return <WrappedComponent {...this.props} />;
    }
  };
}
