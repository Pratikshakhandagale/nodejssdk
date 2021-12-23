# nodejssdk

Steps to Publish package:
1. npm version **patch**     (major/minor/patch) (1.0.**0**)
2. git push origin **v0.0.4**
3. git push
4. npm publish

package **published** successfully. You can check here - https://www.npmjs.com/package/@ngtek/nodejssdk

How to run - **node index.js**

How to us in Angular Project :

1. Install SDK in you project.
<pre> npm i @ngtek/nodejssdk </pre>

2. Import library in your **app.component.ts** file
<pre> import * as **nodejssdk** from  '@ngtek/nodejssdk';
</pre>

3. Now, you can access any function of library
<pre>     **nodejssdk**.isOdd(2);
</pre>
