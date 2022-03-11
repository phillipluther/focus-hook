import assert from 'assert';

try {
  assert.strictEqual(1, 1, 'Tests forthcoming');
  console.log('Ok');
} catch (error) {
  if (error instanceof AssertionError) {
    console.error(error);
  }
}
