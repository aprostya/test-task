import ContentLoader from 'react-content-loader';
import './loader.scss';

const SkeletonMock = () => (
  <div className="loader-wrapper">
    <ContentLoader
      speed={2}
      width={476}
      height={600}
      viewBox="0 0 476 600"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
      <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
      <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
      <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <circle cx="20" cy="20" r="20" />
      <rect x="50" y="132" rx="3" ry="3" width="88" height="6" />
      <rect x="50" y="150" rx="3" ry="3" width="52" height="6" />
      <rect x="2" y="180" rx="3" ry="3" width="410" height="6" />
      <rect x="2" y="196" rx="3" ry="3" width="380" height="6" />
      <rect x="2" y="212" rx="3" ry="3" width="178" height="6" />
      <circle cx="22" cy="144" r="20" />
      <rect x="52" y="251" rx="3" ry="3" width="88" height="6" />
      <rect x="52" y="269" rx="3" ry="3" width="52" height="6" />
      <rect x="4" y="299" rx="3" ry="3" width="410" height="6" />
      <rect x="4" y="315" rx="3" ry="3" width="380" height="6" />
      <rect x="4" y="331" rx="3" ry="3" width="178" height="6" />
      <circle cx="24" cy="263" r="20" />
      <rect x="53" y="384" rx="3" ry="3" width="88" height="6" />
      <rect x="53" y="402" rx="3" ry="3" width="52" height="6" />
      <rect x="5" y="432" rx="3" ry="3" width="410" height="6" />
      <rect x="5" y="448" rx="3" ry="3" width="380" height="6" />
      <rect x="5" y="464" rx="3" ry="3" width="178" height="6" />
      <circle cx="25" cy="396" r="20" />
      <rect x="51" y="506" rx="3" ry="3" width="88" height="6" />
      <rect x="51" y="524" rx="3" ry="3" width="52" height="6" />
      <rect x="3" y="554" rx="3" ry="3" width="410" height="6" />
      <rect x="3" y="570" rx="3" ry="3" width="380" height="6" />
      <rect x="3" y="586" rx="3" ry="3" width="178" height="6" />
      <circle cx="23" cy="518" r="20" />
      <rect x="49" y="628" rx="3" ry="3" width="88" height="6" />
      <rect x="49" y="646" rx="3" ry="3" width="52" height="6" />
      <rect x="1" y="676" rx="3" ry="3" width="410" height="6" />
      <rect x="1" y="692" rx="3" ry="3" width="380" height="6" />
      <rect x="1" y="708" rx="3" ry="3" width="178" height="6" />
      <circle cx="21" cy="640" r="20" />
    </ContentLoader>
  </div>
);

export { SkeletonMock };
