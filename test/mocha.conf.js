import sinon from 'sinon';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';

chai.use(chaiAsPromised);
chai.use(sinonChai);

chai.should();
global.expect = chai.expect;

global.spy = sinon.spy;
global.stub = sinon.stub;
