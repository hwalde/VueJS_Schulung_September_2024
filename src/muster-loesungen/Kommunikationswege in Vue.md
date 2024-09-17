Welche Wege gibt es:

## Zwischen beliebigen Komponenten
- Composables mit reaktiver Variable die geteilt wird
- Messaging Bus Systeme (z.B. RxJS)

## Eltern -> Kind (eine Ebene)
- props (für Datentypen)
- slot (für Komponenten)

## Eltern <-> Kind (eine Ebene)
- v-model
- v-model.blablub
- prop+emit(selber abfangen)

## Eltern <- Kind (eine Ebene)
- emit

## Eltern zu allen Nachfahren
- provide/inject




