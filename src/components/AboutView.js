import Hero from "./Hero";

const AboutView = () => {
  return (
    <div>
      <Hero text="About us" />

      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="Lead">
                Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras
                porttitor condimentum orci suscipit. Leo maecenas in tristique,
                himenaeos elementum placerat. Taciti rutrum nostra, eget cursus velit
                ultricies. Quam molestie tellus himenaeos cubilia congue vivamus
                ultricies. Interdum praesent ut penatibus fames eros ad consectetur sed.
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

export default AboutView;
