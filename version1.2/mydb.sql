-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalles`
--

CREATE TABLE `detalles` (
  `id` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `precio_unitario` int(11) DEFAULT NULL,
  `id_factura` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas`
--

CREATE TABLE `facturas` (
  `id` int(11) NOT NULL,
  `numero_factura` int(11) NOT NULL,
  `fecha` date DEFAULT NULL,
  `tipo_pago` varchar(20) DEFAULT NULL,
  `documento_cliente` varchar(20) DEFAULT NULL,
  `nombre_cliente` varchar(100) DEFAULT NULL,
  `subtotal` int(11) DEFAULT NULL,
  `descuento` int(11) DEFAULT NULL,
  `iva` int(11) DEFAULT NULL,
  `total_descuento` int(11) DEFAULT NULL,
  `total_impuesto` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL,
  `nombre_producto` varchar(100) NOT NULL
);

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre_producto`) VALUES
(1, 'Camisa'),
(2, 'Pantalon'),
(3, 'Zapatos'),
(4, 'Medias'),
(5, 'Chaqueta'),
(6, 'Correa');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `detalles`
--
ALTER TABLE `detalles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_detalles_facturas_idx` (`id_factura`),
  ADD KEY `fk_detalles_productos1_idx` (`id_producto`);

--
-- Indices de la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `detalles`
--
ALTER TABLE `detalles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `facturas`
--
ALTER TABLE `facturas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalles`
--
ALTER TABLE `detalles`
  ADD CONSTRAINT `fk_detalles_facturas` FOREIGN KEY (`id_factura`) REFERENCES `facturas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_detalles_productos1` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`) ON DELETE NO ACTION ON UPDATE NO ACTION;
;