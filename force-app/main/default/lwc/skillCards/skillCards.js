import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/images';

export default class SkillCards extends LightningElement {

    adminImage = IMAGES+'/admin.png';
    developerImage = IMAGES+'/developer.png';
    data_analytics = IMAGES+'/data_analytics.png';

}