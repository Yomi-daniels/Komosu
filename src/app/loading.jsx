import loadingtyles from "./page.module.css"
const Loading = () => {
  return <div className={loadingtyles.loading}>
      <div className={loadingtyles.loader}>
  <div className={loadingtyles.circle}>
    <div className={loadingtyles.dot}></div>
    <div className={loadingtyles.outline}></div>
  </div>
  <div className={loadingtyles.circle}>
    <div className={loadingtyles.dot}></div>
    <div className={loadingtyles.outline}></div>
  </div>
  <div className={loadingtyles.circle}>
    <div className={loadingtyles.dot}></div>
    <div className={loadingtyles.outline}></div>
  </div>
  <div className={loadingtyles.circle}>
    <div className={loadingtyles.dot}></div>
    <div className={loadingtyles.outline}></div>
  </div>
</div>
  </div>;
};

export default Loading;
