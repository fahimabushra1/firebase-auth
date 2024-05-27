

const Accordian = () => {
    return (
        <div className="my-8">
            <div className="collapse collapse-arrow">
  <input type="radio" name="my-accordion-2" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
    How can I purchase from ToyStore?
  </div>
  <div className="collapse-content"> 
    <p>You can purchase toy both online and offline.</p>
  </div>
</div>
<div className="collapse collapse-arrow">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
   How can I return?
  </div>
  <div className="collapse-content"> 
    <p>You can return product easily.You have to follow our return policy. </p>
  </div>
</div>
<div className="collapse collapse-arrow">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Do have any outlet?
  </div>
  <div className="collapse-content"> 
    <p>Yes,we have 20 outlets in different cities.</p>
  </div>
</div>
        </div>
    );
};

export default Accordian;