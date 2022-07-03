import Hero from "./Hero";

const HomeView = () => {
  return (
    <div>
      <Hero text="Welcome" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="Lead">
              lorem Lorem ipsum, or lipsum as it is sometimes known, is dummy
              text used in laying out print, graphic or web designs. The passage
              is attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book. It usually begins with
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius; dignissim elementum. Mollis tincidunt
              mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
              parturient habitant pharetra rutrum gravida porttitor eros
              feugiat. Mollis elit sodales taciti duis praesent id. Consequat
              urna vitae morbi nunc congue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
