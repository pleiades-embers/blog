### Optional

```java
public class DataResult<R> implements App<DataResult.Mu, R> {
  public static <K, V> Function<K, DataResult<V>> partialGet(final Function<K, V> partialGet, final Supplier<String> errorPrefix) {
        return name -> Optional.ofNullable(partialGet.apply(name)).map(DataResult::success).orElseGet(() -> error(errorPrefix.get() + name));
    }
}
```

```java

```