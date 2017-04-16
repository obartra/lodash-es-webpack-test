Uses modified version of lodash-cli that doesn't export lodash as default to test webpack treeshaking.

Run `yarn start` to generate the custom lodash-es build.

Run `yarn build` to generate a webpack build for the following files:


```javascript
import { times } from './lodash-es/lodash';

times(() => console.log('Hello!'));
```

```javascript
import times from './lodash-es/times';

times(() => console.log('Hello!'));
```

The first one results in a 844kb build and the second one on 19kb.
